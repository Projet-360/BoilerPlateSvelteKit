import { Request, Response } from 'express';
import * as authService from '../../../../services/authService.js';
import logger from '../../../../services/logger.js';
import CustomError from '../../../../services/errors/CustomError.js';

const signupResolver = async (
  username: string,
  email: string,
  password: string,
) => {
  try {
    // Vérifier si l'email existe déjà
    await authService.checkEmailExists(email);

    // Hachage du mot de passe
    const hashedPassword = await authService.hashPassword(password);

    // Création de l'utilisateur
    const role = 'user'; // Définissez le rôle par défaut ou ajustez selon la logique
    const newUser = await authService.createUser(
      username,
      email,
      hashedPassword,
      role,
    );

    // Gestion des tokens
    await authService.createSignupToken(newUser);
    await authService.createVerificationToken(newUser);

    // // Notification via Socket.io
    // context.io.emit('user signed up', { username, email });

    // Réponse de succès
    return { message: 'SUCCESS_LOGIN' };
  } catch (error: any) {
    logger.info(error);
    throw new CustomError('SignupError', error.message, 400);
  }
};
export default signupResolver;
