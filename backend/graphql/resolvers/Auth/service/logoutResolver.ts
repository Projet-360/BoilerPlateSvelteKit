import { Request, Response } from 'express';
import BlacklistedToken from '../../../../models/BlacklistedTokenModel.js';
import CustomError from '../../../../services/errors/CustomError.js';

const logoutResolver = async (req: Request, res: Response) => {
  try {
    const token = req.cookies[process.env.TOKEN_NAME as string];

    if (token) {
      const newBlacklistedToken = new BlacklistedToken({ token });
      await newBlacklistedToken.save();

      res.clearCookie(process.env.TOKEN_NAME as string);
      return { message: 'Déconnexion réussie' };
    } else {
      throw new Error('No token provided');
    }
  } catch (error: any) {
    throw new CustomError('LogoutError', error.message, 400);
  }
};
export default logoutResolver;
