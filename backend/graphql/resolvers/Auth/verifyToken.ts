import * as authService from '../../../services/authService.js';
import logger from '../../../services/logger.js';
import CustomError from '../../../errors/CustomError.js';

const verifyToken = async (token: string) => {
  try {
    const verified = await authService.verifyToken(token);

    if (verified) {
      return { message: 'Token verified successfully' };
    } else {
      return { message: 'Token verification failed' };
    }
  } catch (error: any) {
    logger.error('Error verifying token:', error);
    throw new CustomError('TokenVerificationError', error.message, 400);
  }
};

export default verifyToken;
