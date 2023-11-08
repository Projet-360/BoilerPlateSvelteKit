// authController.js
import { Request, Response, NextFunction } from 'express';

import { HTTP_STATUS } from '../constants/HTTP_STATUS.js';
import CustomError from '../errors/CustomError.js';
import logger from '../services/logger.js';
import { User } from '../models/UserModel.js';

export const forgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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
    logger.error('Erreur lors de la réinitialisation du mot de passe:', error);
    next(new CustomError('ResetPasswordError', error.message, 500));
  }
};

export const forgotPasswordToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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
    logger.error('Erreur lors de la réinitialisation du mot de passe:', error);
    next(new CustomError('ResetPasswordError', error.message, 500));
  }
};
