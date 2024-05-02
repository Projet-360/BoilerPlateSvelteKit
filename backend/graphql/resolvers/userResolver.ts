import * as authService from '../../services/authService.js';
import CustomError from '../../errors/CustomError.js';
import logger from '../../services/logger.js';
import UAParser from 'ua-parser-js';
import { Session } from '../../models/sessionModel.js';
import { Request, Response } from 'express';

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

interface Context {
  req: Request;
  res: Response;
  io: any;
}

// Adapter IUser pour matcher avec les types GraphQL si nécessaire
interface IUserGraphql {
  id: string;
  username: string;
  email: string;
  role: 'user' | 'admin' | 'moderator' | undefined;
}

export const userResolver = {
  Query: {
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
    login: async (_: any, { email, password }: LoginArgs, context: Context) => {
      try {
        const loginResult = await authService.login(email, password);

        if (!loginResult) {
          throw new Error('Login failed');
        }

        const { token, _id, role } = loginResult;

        // Définir le cookie de manière sécurisée
        context.res.cookie('auth_token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production', // Assurez-vous que les cookies sont sécurisés en production
          sameSite: 'strict',
        });

        // Analyser le User Agent
        const userAgentString = context.req.headers['user-agent'];
        const parser = new UAParser(userAgentString);
        const browserInfo = parser.getBrowser();
        const osInfo = parser.getOS();
        const deviceInfo = parser.getDevice();

        const sessionData = {
          userId: _id,
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
          ip:
            context.req.ip ||
            context.req.headers['x-forwarded-for'] ||
            'IP not available',
        };

        const session = new Session(sessionData);
        await session.save();

        return {
          success: true,
          role,
          userId: _id,
          sessionId: session._id.toString(),
        };
      } catch (error: any) {
        logger.error('Error in login mutation:', error);
        throw new CustomError('LoginError', error.message, 400);
      }
    },
  },
};
