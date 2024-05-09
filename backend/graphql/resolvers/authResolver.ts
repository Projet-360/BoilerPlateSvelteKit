import { NextFunction, Request, Response } from 'express';
import UAParser from 'ua-parser-js';

import * as authService from '../../services/authService.js';
import CustomError from '../../errors/CustomError.js';
import logger from '../../services/logger.js';
import { Session } from '../../models/sessionModel.js';
import BlacklistedToken from '../../models/BlacklistedTokenModel.js';
import { User } from '../../models/UserModel.js';

import dotenv from 'dotenv';
dotenv.config();

interface Context {
  req: Request;
  res: Response;
  next: NextFunction;
  io: any;
}

export const authResolver = {
  Query: {
    checkAuth: async (_: any, __: any, { req, res }: Context) => {
      const tokenKey = process.env.TOKEN_NAME as string;
      const token = req.cookies[tokenKey];

      if (!token || token === 'undefined' || token === 'null') {
        return { isAuthenticated: false };
      }

      const isBlacklisted = await BlacklistedToken.findOne({ token });
      if (isBlacklisted) {
        res.clearCookie(process.env.TOKEN_NAME as string);
        return { isAuthenticated: false };
      }

      const result = await authService.checkAuthService(token);
      console.log('result', result);

      if (result.isAuthenticated) {
        return {
          isAuthenticated: true,
          userId: result._id,
          role: result.role,
          userData: {
            username: result.name,
            email: result.email,
          },
        };
      } else {
        return { isAuthenticated: false };
      }
    },
    verifyToken: async (_: any, { token }: App.TokenArgs, context: Context) => {
      try {
        const verified = await authService.verifyToken(token);

        if (verified) {
          return { message: 'Token verified successfully' };
        } else {
          return { message: 'Token verification failed' };
        }
      } catch (error: any) {
        logger.error('Error verifying token:', error);
        throw new CustomError('TokenVerificationError', error.message, 400);
      }
    },
    getDashboardData: async (_: any, __: any, { req }: Context) => {
      const tokenKey = process.env.TOKEN_NAME as string;
      const token = req.cookies[tokenKey];
      console.log('req.user', req.user);
      const result = await authService.checkAuthService(token);

      console.log('resultscece', result);
      console.log('resultscece', result._id);
      if (!result || !result._id) {
        throw new Error('User not authenticated or user ID missing');
      }

      try {
        const userInfo = await authService.getUserInfo(result._id);
        console.log(userInfo, 'userInfo');

        return { userInfo }; // Ensure this matches your GraphQL schema expectations
      } catch (error) {
        console.error('Failed to fetch user info:', error);
        throw new Error('Failed to fetch user info');
      }
    },
  },
  Mutation: {
    signup: async (
      _: any,
      { username, email, password }: App.SignupArgs,
      context: Context,
    ) => {
      try {
        // Vérifier si l'email existe déjà
        await authService.checkEmailExists(email);

        // Hachage du mot de passe
        const hashedPassword = await authService.hashPassword(password);

        // Création de l'utilisateur
        const role = 'user'; // Définissez le rôle par défaut ou ajustez selon la logique
        const newUser = await authService.createUser(
          username,
          email,
          hashedPassword,
          role,
        );

        // Gestion des tokens
        await authService.createSignupToken(newUser);
        await authService.createVerificationToken(newUser);

        // // Notification via Socket.io
        // context.io.emit('user signed up', { username, email });

        // Réponse de succès
        return { message: 'SUCCESS_LOGIN' };
      } catch (error: any) {
        logger.info(error);
        throw new CustomError('SignupError', error.message, 400);
      }
    },
    login: async (
      _: any,
      { email, password, fingerPrint }: App.LoginArgs,
      { req, res }: Context,
    ): Promise<App.LoginResponse> => {
      try {
        const loginResult = await authService.login(email, password);

        if (!loginResult) {
          throw new CustomError('LoginFailed', 'Login failed', 400);
        }

        const { token, _id, role } = loginResult;
        authService.setAuthCookie(res, process.env.TOKEN_NAME as string, token);

        const userData = await authService.getUserInfo(_id);

        const sessionData = {
          userId: _id.toString(),
          ...fingerPrint,
        };

        // Vérifier si une session avec les mêmes données existe déjà
        const existingSession = await Session.findOne({
          userId: sessionData.userId,
          userAgent: sessionData.userAgent,
          screenResolution: sessionData.screenResolution,
          timezone: sessionData.timezone,
          webglVendor: sessionData.webglVendor,
          webglRenderer: sessionData.webglRenderer,
          canvasFingerprint: sessionData.canvasFingerprint,
        });

        let sessionId;
        if (existingSession) {
          // Utiliser l'ID de la session existante
          sessionId = existingSession._id.toString();
        } else {
          // Créer et enregistrer une nouvelle session si elle n'existe pas déjà
          const session = new Session(sessionData);
          await session.save();
          sessionId = session._id.toString();
        }

        return {
          userId: _id.toString(),
          role: role || 'defaultRole', // Valeur par défaut pour le rôle
          sessionId: sessionId,
          userData: {
            username: userData.username,
            email: userData.email,
          },
        };
      } catch (error: any) {
        logger.error('Error in login mutation:', error);
        throw new CustomError('LoginError', error.message, 400);
      }
    },
    logout: async (
      _: any,
      __: any,
      { req, res }: Context,
    ): Promise<{ message: string }> => {
      try {
        const token = req.cookies[process.env.TOKEN_NAME as string];

        if (token) {
          const newBlacklistedToken = new BlacklistedToken({ token });
          await newBlacklistedToken.save();

          res.clearCookie(process.env.TOKEN_NAME as string);
          return { message: 'Déconnexion réussie' };
        } else {
          throw new Error('No token provided');
        }
      } catch (error: any) {
        throw new CustomError('LogoutError', error.message, 400);
      }
    },
    sendEmailResetPassword: async (
      _: any,
      { email }: App.LoginArgs,
      { req, res, next }: Context,
    ) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return next(new CustomError('USER_NOT_FOUND', 'USER_NOT_FOUND', 404));
        }

        if (!user.isVerified) {
          return next(
            new CustomError('EMAIL_NOT_VERIFIED', 'EMAIL_NOT_VERIFIED', 404),
          );
        }

        await authService.requestForgotPassword(user as App.IUser);

        return { message: 'SUCCESS_SENDEMAILRESETPASSWORD' };
      } catch (error: any) {
        logger.error(
          'Erreur lors de la réinitialisation du mot de passe:',
          error,
        );
        next(new CustomError('ResetPasswordError', error.message, 500));
      }
    },
    resetForgotNewPassword: async (
      _: any,
      { token, newPassword, confirmPassword }: App.ResetForgotNewPasswordArgs,
      { req, res, next }: Context,
    ) => {
      try {
        // Validation: Check if newPassword and confirmPassword are the same
        if (newPassword !== confirmPassword) {
          return next(
            new CustomError(
              'FORGOT_PASSWORD_INVALID',
              'FORGOT_PASSWORD_INVALID',
              400,
            ),
          );
        }

        // Trouver l'utilisateur avec le token de réinitialisation
        const user = await User.findOne({
          resetToken: token,
          resetTokenExpiration: { $gt: Date.now() },
        });

        if (!user) {
          return next(
            new CustomError(
              'TOKEN_INVALID_OR_EXPIRED',
              'TOKEN_INVALID_OR_EXPIRED',
              400,
            ),
          );
        }

        await authService.requestresetForgotPassword(
          user as App.IUser,
          newPassword,
        );

        return { message: 'SUCCESS_SEND_RESET_PASSWORD' };
      } catch (error: any) {
        logger.error(
          'Erreur lors de la réinitialisation du mot de passe:',
          error,
        );
        next(new CustomError('ResetPasswordError', error.message, 500));
      }
    },
  },
};
