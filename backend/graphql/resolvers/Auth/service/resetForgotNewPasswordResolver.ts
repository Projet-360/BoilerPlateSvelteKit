import { NextFunction, Request, Response } from 'express';
import { User } from '../../../../models/UserModel.js';
import * as authService from '../../../../services/authService.js';
import CustomError from '../../../../services/errors/CustomError.js';

const resetForgotNewPasswordResolver = async (
  token: string,
  newPassword: string,
  confirmPassword: string,
  next: NextFunction,
) => {
  console.log('token', token, newPassword, confirmPassword);

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

    await authService.requestResetForgotPassword(user as TS.IUser, newPassword);

    return { message: 'SUCCESS_SEND_RESET_PASSWORD' };
  } catch (error: any) {
    next(new CustomError('ResetPasswordError', error.message, 500));
  }
};
export default resetForgotNewPasswordResolver;
