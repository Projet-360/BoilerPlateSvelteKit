// authController.js
import { Request, Response, NextFunction } from 'express';

import BlacklistedToken from '../../models/BlacklistedTokenModel.js';
import CustomError from '../../errors/CustomError.js';

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
