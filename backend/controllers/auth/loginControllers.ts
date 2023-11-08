// authController.js
import { Request, Response, NextFunction } from 'express';
import UAParser from 'ua-parser-js';

import { HTTP_STATUS } from '../../constants/HTTP_STATUS.js';
import * as authService from '../../services/authService.js';
import CustomError from '../../errors/CustomError.js';
import { Session } from '../../models/sessionModel.js';
import logger from '../../services/logger.js';

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
