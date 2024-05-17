import { Request, Response } from 'express';
import { User } from '../../../../models/UserModel.js';
import * as authService from '../../../../services/authService.js';
import { sendDeleteAccountEmail } from '../../../../services/emailService.js';
import logger from '../../../../services/logger.js';

// Resolver pour la mutation requestAccountDeletion
const requestAccountDeletionResolver = async (req: Request, res: Response) => {
  try {
    const tokenKey = process.env.TOKEN_NAME as string;
    const token = req.cookies[tokenKey];

    const idReceived = await authService.getIDByToken(token);
    const id: string = idReceived.id;

    // Génération d'un jeton de suppression sécurisé
    const deleteToken = await authService.generateDeleteToken();

    // Trouver l'utilisateur et enregistrer le jeton avec une date d'expiration
    const user = await User.findById(id);
    if (!user) {
      return res.status(409).json({ message: 'Utilisateur non trouvé.' });
    }

    user.deleteToken = deleteToken;
    user.deleteTokenExpiration = new Date(Date.now() + 3600000); // 1 heure pour l'expiration
    await user.save();

    // Envoyer l'email de suppression
    await sendDeleteAccountEmail(user.email, deleteToken);

    return { message: 'DELETE_ACCOUNT_EMAIL_SENT' };
  } catch (error: any) {
    logger.error('Erreur lors de la demande de suppression de compte:', error);
    res.status(500).json({ message: 'Erreur du serveur.' });
  }
};

export default requestAccountDeletionResolver;
