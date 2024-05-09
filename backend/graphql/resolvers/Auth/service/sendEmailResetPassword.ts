import { NextFunction, Request, Response } from 'express';
import { User } from '../../../../models/UserModel.js';
import * as authService from '../../../../services/authService.js';
import CustomError from '../../../../errors/CustomError.js';

const sendEmailResetPasswordResolver = async (
  email: string,
  next: NextFunction,
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
    next(new CustomError('ResetPasswordError', error.message, 500));
  }
};
export default sendEmailResetPasswordResolver;
