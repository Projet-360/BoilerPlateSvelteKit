import { NextFunction, Request } from 'express';
import { User } from '../../../../models/UserModel.js';
import * as authService from '../../../../services/authService.js';
import CustomError from '../../../../services/errors/CustomError.js';

const sendEmailResetEmailByUserResolver = async (
  newEmail: string,
  next: NextFunction,
  req: Request,
) => {
  const tokenKey = process.env.TOKEN_NAME as string;
  const token = req.cookies[tokenKey];

  // Vérifier l'authentification et récupérer l'ID de l'utilisateur
  const authResult = await authService.checkAuthService(token);
  if (!authResult || !authResult._id) {
    throw new Error('User not authenticated or user ID missing');
  }

  try {
    const userInfo = await authService.getUserInfo(authResult._id);
    const currentEmail = userInfo.email; // Email actuel pour confirmation

    if (newEmail !== currentEmail) {
      const emailInUse = await User.findOne({ email: newEmail });
      if (emailInUse) {
        throw new Error('New email is already in use');
      }
      // Code pour envoyer l'email de réinitialisation ou de confirmation ici
      return { message: 'Reset email sent successfully' };
    } else {
      throw new Error('New email is the same as the current email');
    }
  } catch (error: any) {
    const customError = new CustomError(
      'ResetEmailError',
      error.message || 'Error sending reset email',
      500,
    );
    next(customError);
    return { message: 'ResetEmailError' };
  }
};

export default sendEmailResetEmailByUserResolver;
