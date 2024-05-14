import { NextFunction } from 'express';
import { User } from '../../../../models/UserModel.js';
import * as authService from '../../../../services/authService.js';
import CustomError from '../../../../services/errors/CustomError.js';

const sendEmailResetPasswordResolver = async (
  email: string,
  next: NextFunction,
) => {
  try {
    const user = await User.findOne({ email });

    console.log('USER', user);

    if (user === null) {
      const error = new CustomError('USER_NOT_FOUND', 'USER_NOT_FOUND', 404);
      next(error);
      return { message: 'USER_NOT_FOUND' };
    }

    if (!user.isVerified) {
      const error = new CustomError(
        'EMAIL_NOT_VERIFIED',
        'EMAIL_NOT_VERIFIED',
        404,
      );
      next(error);
      return { message: 'EMAIL_NOT_VERIFIED' };
    }

    await authService.requestForgotPassword(user as TS.IUser);

    return { message: 'SUCCESS_SENDEMAILRESETPASSWORD' };
  } catch (error: any) {
    const customError = new CustomError(
      'ResetPasswordError',
      error.message,
      500,
    );
    next(customError);
    return { message: 'ResetPasswordError' };
  }
};

export default sendEmailResetPasswordResolver;
