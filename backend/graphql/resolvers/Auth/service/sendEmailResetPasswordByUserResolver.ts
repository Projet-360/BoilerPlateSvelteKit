import { NextFunction, Request, Response } from 'express';
import { User } from '../../../../models/UserModel.js';
import * as authService from '../../../../services/authService.js';
import CustomError from '../../../../services/errors/CustomError.js';

const sendEmailResetPasswordByUserResolver = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const tokenKey = process.env.TOKEN_NAME as string;
    const token = req.cookies[tokenKey];
    console.log('token', token);

    const idReceived = await authService.getIDByToken(token);
    const id: string = idReceived.id;
    console.log('id', id);

    const userInfo = await authService.getUserInfo(id);

    console.log(userInfo, 'userInfo');

    const email = userInfo.email;

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

    return { message: 'successSendEmailResetPassword' };
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

export default sendEmailResetPasswordByUserResolver;
