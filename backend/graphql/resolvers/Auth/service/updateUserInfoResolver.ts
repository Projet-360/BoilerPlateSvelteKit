import * as authService from '../../../../services/authService.js';
import logger from '../../../../services/logger.js';
import CustomError from '../../../../services/errors/CustomError.js';

const updateUserInfoResolver = async (
  id: string,
  username: string,
  email: string,
) => {
  try {
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
