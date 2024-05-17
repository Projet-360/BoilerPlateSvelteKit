import * as authService from '../../../../services/authService.js';
import logger from '../../../../services/logger.js';
import CustomError from '../../../../services/errors/CustomError.js';
import { Request } from 'express';

const updateUserInfoResolver = async (
  username: string,
  email: string,
  req: Request,
) => {
  try {
    const tokenKey = process.env.TOKEN_NAME as string;
    const token = req.cookies[tokenKey];

    if (!token || token === 'undefined' || token === 'null') {
      return { isAuthenticated: false };
    }

    const idReceived = await authService.getIDByToken(token);
    const id: string = idReceived.id;

    const verified = await authService.updateUserInfo(id, {
      username,
      email,
    });

    console.log('verified', verified);

    if (verified && verified.updatedUser) {
      const dataReturn = {
        id: verified.updatedUser.id,
        username: verified.updatedUser.username,
        email: verified.updatedUser.email,
      };

      return dataReturn;
    }
  } catch (error: any) {
    logger.error('Error verifying token:', error);
    throw new CustomError('TokenVerificationError', error.message, 400);
  }
};
export default updateUserInfoResolver;
