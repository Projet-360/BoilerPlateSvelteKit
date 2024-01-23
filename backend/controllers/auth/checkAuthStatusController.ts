// authController.js
import { Request, Response, NextFunction } from 'express';

import { HTTP_STATUS } from '../../constants/HTTP_STATUS.js';
import BlacklistedToken from '../../models/BlacklistedTokenModel.js';
import * as authService from '../../services/authService.js';
import CustomError from '../../errors/CustomError.js';

export const checkAuthStatus: any = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.token;

  try {
    if (!token || token === 'undefined' || token === 'null') {
      return res.status(HTTP_STATUS.OK).json({ isAuthenticated: false });
    }

    const isBlacklisted = await BlacklistedToken.findOne({ token });
    if (isBlacklisted) {
      res.clearCookie('token');
      return res.status(HTTP_STATUS.OK).json({ isAuthenticated: false });
    }

    const result = await authService.checkAuthentication(token);
    if (result.isAuthenticated) {
      return res.status(HTTP_STATUS.OK).json({
        isAuthenticated: true,
        role: result.role,
        _id: result._id,
      });
    } else {
      return res.status(HTTP_STATUS.OK).json({ isAuthenticated: false });
    }
  } catch (error: any) {
    next(
      new CustomError('CheckAuthError', error.message, HTTP_STATUS.BAD_REQUEST),
    );
  }
};
