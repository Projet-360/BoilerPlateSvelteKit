// authController.js
import { Request, Response, NextFunction } from 'express';
import UAParser from 'ua-parser-js';

import { HTTP_STATUS } from '../constants/HTTP_STATUS.js';
import BlacklistedToken from '../models/BlacklistedTokenModel.js';
import * as authService from '../services/authService.js';
import CustomError from '../errors/CustomError.js';
import { Session } from '../models/sessionModel.js';
import logger from '../services/logger.js';

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies.token;
    const newBlacklistedToken = new BlacklistedToken({ token });
    await newBlacklistedToken.save();

    res.clearCookie('token');
    res.status(200).json({ message: 'Déconnexion réussie' });
  } catch (error: any) {
    next(new CustomError('LogoutError', error.message, 400));
  }
};

export const verify = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;

    const message = await authService.verifyToken(token);

    res.status(HTTP_STATUS.OK).json({ success: true });
  } catch (error: any) {
    console.error("Erreur lors de la vérification de l'e-mail:", error);
    res.status(500).json({ message: error.message });
  }
};

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username, email, password } = req.body;
    await authService.checkEmailExists(email);
    const hashedPassword = await authService.hashPassword(password);
    const role = 'user';
    const newUser = await authService.createUser(
      username,
      email,
      hashedPassword,
      role,
    );
    await authService.createSignupToken(newUser);
    await authService.createVerificationToken(newUser);

    res.status(HTTP_STATUS.OK).json({ success: true });
  } catch (error: any) {
    logger.info(error);
    next(new CustomError('SignupError', error.message, 400));
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;
    const loginResult = await authService.login(email, password);

    if (loginResult) {
      const { token, _id, role } = loginResult;
      // Définir le cookie
      authService.setAuthCookie(res, token);

      // Utilisez le User Agent de la requête au lieu d'une chaîne simulée
      const userAgentString = req.headers['user-agent'];

      // Créez une instance de UAParser avec le User Agent de la requête
      const parser = new UAParser(userAgentString);

      // Extrait les informations du User Agent
      const browserInfo = parser.getBrowser();
      const osInfo = parser.getOS();
      const deviceInfo = parser.getDevice();

      // Enregistrez les informations de la session dans la base de données
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
        device: deviceInfo.model || 'unknown', // Utilisez 'unknown' si le modèle n'est pas disponible
        ip: req.ip,
      };

      const session = new Session(sessionData);
      await session.save();

      res.status(HTTP_STATUS.OK).json({ _id, role });
    } else {
      // Gérer le cas où le résultat de la connexion est indéfini
      throw new Error('Login failed');
    }
  } catch (error: any) {
    logger.info('error from authRoutes', error);
    next(new CustomError('LoginError', error.message, 400));
  }
};
