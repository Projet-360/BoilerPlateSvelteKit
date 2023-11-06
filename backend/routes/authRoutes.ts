// Import required modules and middleware
import { Request, Response, NextFunction } from 'express';
import { Router } from 'express';

// Initialize Express router
const router = Router();

import pkg from 'bcryptjs';
const { hash, compare } = pkg;
import { check, validationResult } from 'express-validator';
import UAParser from 'ua-parser-js';

import { handleValidationErrors } from '../middlewares/handleValidationErrors.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { checkRole } from '../middlewares/checkRole.js';

import { HTTP_STATUS } from '../constants/HTTP_STATUS.js';

import { User } from '../models/UserModel.js';
import { Session } from '../models/sessionModel.js';
import BlacklistedToken from '../models/BlacklistedTokenModel.js';

import * as authService from '../services/authService.js';
import * as emailService from '../services/emailService.js';
import logger from '../services/logger.js';
import { bruteForceRateLimiter, rateLimiter } from '../services/rateLimiter.js';

import {
  signupValidators,
  updateUserValidators,
  emailValidators,
} from '../validations/validators.js';

import CustomError from './../errors/CustomError.js';

// Endpoint to check authentication status
router.get('/check-auth', async (req, res, next) => {
  // Retrieve token from cookies
  const token = req.cookies.token;

  try {
    // If no token is present, the user is not authenticated.
    if (!token || token === 'undefined' || token === 'null') {
      return res.status(HTTP_STATUS.OK).json({ isAuthenticated: false });
    }

    // Check if the token is blacklisted
    const isBlacklisted = await BlacklistedToken.findOne({ token });
    if (isBlacklisted) {
      // Clear the cookie as the token is blacklisted
      res.clearCookie('token');
      return res.status(HTTP_STATUS.OK).json({ isAuthenticated: false });
    }

    // Validate the token and get the authentication status
    const result = await authService.checkAuthentication(token);

    // Check if the user is authenticated
    if (result.isAuthenticated) {
      return res.status(HTTP_STATUS.OK).json({
        isAuthenticated: true,
        role: result.role,
        _id: result._id,
      });
    } else {
      // User is not authenticated, but no error should be thrown.
      return res.status(HTTP_STATUS.OK).json({ isAuthenticated: false });
    }
  } catch (error: any) {
    console.error('JWT verification error:', error);
    next(
      new CustomError('CheckAuthError', error.message, HTTP_STATUS.BAD_REQUEST),
    );
  }
});

// Endpoint to handle user logout
router.get(
  '/logout',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.cookies.token;
      const newBlacklistedToken = new BlacklistedToken({ token });
      await newBlacklistedToken.save();

      res.clearCookie('token');
      res.status(200).json({ message: 'Déconnexion réussie' });
    } catch (error: any) {
      next(new CustomError('LogoutError', error.message, 400));
    }
  },
);

// Endpoint to verify email
router.get('/verify/:token', async (req: Request, res: Response) => {
  try {
    const { token } = req.params;

    const message = await authService.verifyToken(token);

    res.status(HTTP_STATUS.OK).json({ success: true });
  } catch (error: any) {
    console.error("Erreur lors de la vérification de l'e-mail:", error);
    res.status(500).json({ message: error.message });
  }
});

// Endpoint for user signup
router.post(
  '/signup',
  bruteForceRateLimiter,
  signupValidators,
  handleValidationErrors,
  async (req: Request, res: Response, next: NextFunction) => {
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
  },
);

// Endpoint for user login with rate limiter
router.post(
  '/login',
  bruteForceRateLimiter,
  async (req: Request, res: Response, next: NextFunction) => {
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
  },
);

router.get('/sessions', isAuthenticated, async (req, res) => {
  console.log('Route /sessions atteinte');
  if (!req.user || !req.user._id) {
    console.log('Utilisateur non authentifié dans /sessions');
    return res.status(401).json({ message: 'Utilisateur non authentifié' });
  }

  try {
    const sessions = await Session.find({ userId: req.user._id }).exec();
    console.log('sessions', sessions);
    res.json(
      sessions.map((s) => ({
        id: s._id,
        userAgent: s.userAgent,
        browser: s.browser, // Assurez-vous que ces champs existent dans votre modèle
        os: s.os, // Assurez-vous que ces champs existent dans votre modèle
        device: s.device, // Assurez-vous que ces champs existent dans votre modèle
        ip: s.ip,
        createdAt: s.createdAt,
      })),
    );
  } catch (error) {
    console.error('Erreur lors de la récupération des sessions', error);
    res.status(500).json({ message: 'Erreur interne du serveur' });
  }
});

router.delete('/sessions/:sessionId', isAuthenticated, async (req, res) => {
  const { sessionId } = req.params;

  if (!req.user || !req.user._id) {
    return res.status(401).json({ message: 'Utilisateur non authentifié' });
  }

  try {
    const session = await Session.findOneAndDelete({
      _id: sessionId,
      userId: req.user._id,
    }).exec();

    if (!session) {
      return res
        .status(404)
        .json({ message: 'Session non trouvée ou déjà fermée' });
    }

    // Supposons que le token est stocké dans un cookie nommé 'token'
    const token = req.cookies.token;
    if (token) {
      const newBlacklistedToken = new BlacklistedToken({ token });
      await newBlacklistedToken.save();
      res.clearCookie('token');
    }

    res.json({ message: 'Session fermée avec succès' });
  } catch (error) {
    console.error('Erreur lors de la fermeture de la session :', error);
    return res.status(500).json({ message: 'Erreur interne du serveur' });
  }
});

// Endpoint to request password reset
router.post(
  '/forgot-password',
  emailValidators,
  handleValidationErrors,
  rateLimiter,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;
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
      res.status(HTTP_STATUS.OK).json({ success: true });
    } catch (error: any) {
      logger.error(
        'Erreur lors de la réinitialisation du mot de passe:',
        error,
      );
      next(new CustomError('ResetPasswordError', error.message, 500));
    }
  },
);

// Endpoint to reset password using a token
router.post(
  '/forgot-password/:token',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { token } = req.params;
      const { newPassword, confirmPassword } = req.body;

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

      res.status(HTTP_STATUS.OK).json({ message: 'Success', success: true });
    } catch (error: any) {
      logger.error(
        'Erreur lors de la réinitialisation du mot de passe:',
        error,
      );
      next(new CustomError('ResetPasswordError', error.message, 500));
    }
  },
);

// User dashboard accessible only for authenticated users with 'user' role
router.get(
  '/user',
  isAuthenticated,
  checkRole('user'),
  async (req: Request & { user?: App.IUser }, res: Response) => {
    if (!req.user as any) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const _id = req.user!._id;
    try {
      const userInfo = await authService.getUserInfo(_id.toString());
      console.log(userInfo);

      res.json({ userInfo });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },
);

router.put(
  '/user/update',
  isAuthenticated,
  checkRole('user'),
  [...updateUserValidators, handleValidationErrors],
  async (req: Request, res: Response) => {
    try {
      const _id = req.user?._id;
      if (typeof _id !== 'string') {
        // Si _id est undefined ou pas une chaîne, renvoyez une erreur.
        return res
          .status(HTTP_STATUS.BAD_REQUEST)
          .json({ message: "L'ID utilisateur est requis." });
      }

      const updateData = req.body;
      logger.info(req);

      const { success, notification } = await authService.updateUserInfo(
        _id,
        updateData,
      );

      res
        .status(HTTP_STATUS.OK)
        .json({ message: 'Success', success, notification });
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
      res
        .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: 'Erreur du serveur.' });
    }
  },
);

// Endpoint to request account deletion
router.post(
  '/user/request-delete',
  isAuthenticated,
  checkRole('user'),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user || !req.user._id) {
        return res
          .status(HTTP_STATUS.UNAUTHORIZED)
          .json({ message: "Identification de l'utilisateur requise." });
      }

      // Génération d'un jeton de suppression sécurisé
      const deleteToken = await authService.generateDeleteToken();

      // Trouver l'utilisateur et enregistrer le jeton avec une date d'expiration
      const user = await User.findById(req.user._id);
      if (!user) {
        return res
          .status(HTTP_STATUS.NOT_FOUND)
          .json({ message: 'Utilisateur non trouvé.' });
      }

      user.deleteToken = deleteToken;
      user.deleteTokenExpiration = new Date(Date.now() + 3600000); // 1 heure pour l'expiration
      await user.save();

      // Envoyer l'email de suppression
      await emailService.sendDeleteAccountEmail(user.email, deleteToken);

      res
        .status(HTTP_STATUS.OK)
        .json({ message: 'E-mail de suppression de compte envoyé.' });
    } catch (error: any) {
      logger.error(
        'Erreur lors de la demande de suppression de compte:',
        error,
      );
      res
        .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: 'Erreur du serveur.' });
    }
  },
);

// Endpoint to confirm account deletion
router.post(
  '/confirm-delete/:deleteToken',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { deleteToken } = req.params;
      console.log('deleteToken', deleteToken);

      // Trouver l'utilisateur avec le jeton de suppression valide et le supprimer
      const result = await User.deleteOne({
        deleteToken: deleteToken,
        deleteTokenExpiration: { $gt: Date.now() },
      });

      console.log('result', result);

      if (result.deletedCount === 0) {
        return res
          .status(404)
          .json({ message: 'Jeton invalide ou compte déjà supprimé.' });
      }

      res
        .status(HTTP_STATUS.OK)
        .json({ message: 'Compte supprimé avec succès.' });
    } catch (error: any) {
      // Gestion des erreurs
      next(new CustomError('DeleteAccountError', error.message, 500));
    }
  },
);

router.get(
  '/admin/users',
  isAuthenticated,
  checkRole('admin'),
  async (req: Request, res: Response) => {
    try {
      const users = await authService.getAllUsers(); // Vous devrez implémenter cette méthode
      res.status(HTTP_STATUS.OK).json({ users });
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
      res
        .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: 'Erreur du serveur.' });
    }
  },
);

router.put(
  '/admin/user/:_id',
  isAuthenticated,
  checkRole('admin'),
  [...updateUserValidators, handleValidationErrors],
  async (req: Request, res: Response) => {
    try {
      const { _id } = req.params;
      console.log('_id', _id);

      const updateData = req.body;
      const { success, notification, updatedUser } =
        await authService.updateUserInfo(_id, updateData);
      res
        .status(HTTP_STATUS.OK)
        .json({ message: 'Success', success, notification, updatedUser });
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
      res
        .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: 'Erreur du serveur.' });
    }
  },
);
// Export the router
export default router;
