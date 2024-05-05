import { NextFunction, Request, Response } from 'express';
import UAParser from 'ua-parser-js';

import * as authService from '../../services/authService.js';
import CustomError from '../../errors/CustomError.js';
import logger from '../../services/logger.js';
import { Session } from '../../models/sessionModel.js';
import BlacklistedToken from '../../models/BlacklistedTokenModel.js';
import { User } from '../../models/UserModel.js';
import { HTTP_STATUS } from '../../constants/HTTP_STATUS.js';

interface SignupArgs {
  username: string;
  email: string;
  password: string;
}

interface LoginArgs {
  email: string;
  password: string;
}

interface TokenArgs {
  token: string;
}

export interface LoginResponse {
  userId: string;
  role?: string; // Change here: Allow role to be undefined
  sessionId: string;
}

interface LogoutResponse {
  message: String;
}

interface Context {
  req: Request;
  res: Response;
  next: NextFunction;
  io: any;
}

export const userResolver = {
  Query: {
    checkAuth: async (_: any, __: any, { req, res }: Context) => {
      const token = req.cookies.token;
      if (!token || token === 'undefined' || token === 'null') {
        return { isAuthenticated: false };
      }

      const isBlacklisted = await BlacklistedToken.findOne({ token });
      if (isBlacklisted) {
        res.clearCookie('token');
        return { isAuthenticated: false };
      }

      const result = await authService.checkAuthentication(token);
      if (result.isAuthenticated) {
        return {
          isAuthenticated: true,
          userId: result._id,
          role: result.role,
        };
      } else {
        return { isAuthenticated: false };
      }
    },
    verifyToken: async (_: any, { token }: TokenArgs, context: Context) => {
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
  },
  Mutation: {
    signup: async (
      _: any,
      { username, email, password }: SignupArgs,
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
      { email, password }: LoginArgs,
      { req, res }: Context,
    ): Promise<LoginResponse> => {
      try {
        const loginResult = await authService.login(email, password);

        if (!loginResult) {
          throw new CustomError('LoginFailed', 'Login failed', 400);
        }

        const { token, _id, role } = loginResult;
        authService.setAuthCookie(res, token);

        const userAgentString = req.headers['user-agent'];
        const parser = new UAParser(userAgentString);
        const browserInfo = parser.getBrowser();
        const osInfo = parser.getOS();
        const deviceInfo = parser.getDevice();

        const sessionData = {
          userId: _id.toString(),
          userAgent: userAgentString,
          browser: {
            name: browserInfo.name,
            version: browserInfo.version,
          },
          os: {
            name: osInfo.name,
            version: osInfo.version,
          },
          device: deviceInfo.model || 'unknown',
          ip: req.ip,
        };

        const session = new Session(sessionData);
        await session.save();

        return {
          userId: _id.toString(),
          role: role || 'defaultRole', // Default value for role
          sessionId: session._id.toString(),
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
        const token = req.cookies.token;
        if (token) {
          const newBlacklistedToken = new BlacklistedToken({ token });
          await newBlacklistedToken.save();

          res.clearCookie('token');
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
      { email }: LoginArgs,
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

        return { message: 'SUCCESS_SEND_EMAIL_RESET_PASSWORD' };
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
