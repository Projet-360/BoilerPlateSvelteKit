import * as authService from '../../../../services/authService.js';
import logger from '../../../../services/logger.js';
import CustomError from '../../../../services/errors/CustomError.js';

const updateUserInfoResolver = async (
  id: string,
  username: string,
  email: string,
  role: string,
) => {
  try {
    const verified = await authService.updateUserInfo(id, {
      username,
      email,
      role,
    });

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
export default updateUserInfoResolver;
