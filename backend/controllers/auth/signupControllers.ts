// authController.js
import { Request, Response, NextFunction } from 'express';

import { HTTP_STATUS } from '../../constants/HTTP_STATUS.js';
import * as authService from '../../services/authService.js';
import CustomError from '../../errors/CustomError.js';
import logger from '../../services/logger.js';

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
