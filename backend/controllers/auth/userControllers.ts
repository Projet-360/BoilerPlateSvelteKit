// authController.js
import { Request, Response, NextFunction } from 'express';

import { HTTP_STATUS } from '../../constants/HTTP_STATUS.js';
import * as authService from '../../services/authService.js';
import CustomError from '../../errors/CustomError.js';
import logger from '../../services/logger.js';
import { User } from '../../models/UserModel.js';
import * as emailService from '../../services/emailService.js';

export const user = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.user as any) {
    return res.status(401).json({ message: 'User not authenticated' });
  }

  const _id = req.user!._id;
  try {
    const userInfo = await authService.getUserInfo(_id.toString());
    console.log(userInfo);

    res.json({ userInfo });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const userUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const _id = req.user?._id;
    if (typeof _id !== 'string') {
      // Si _id est undefined ou pas une chaîne, renvoyez une erreur.
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ message: "L'ID utilisateur est requis." });
    }

    const updateData = req.body;
    logger.info(req);

    const { success, notification } = await authService.updateUserInfo(
      _id,
      updateData,
    );

    res
      .status(HTTP_STATUS.OK)
      .json({ message: 'Success', success, notification });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: 'Erreur du serveur.' });
  }
};

export const userRequestDelete = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user || !req.user._id) {
      return res
        .status(HTTP_STATUS.UNAUTHORIZED)
        .json({ message: "Identification de l'utilisateur requise." });
    }

    // Génération d'un jeton de suppression sécurisé
    const deleteToken = await authService.generateDeleteToken();

    // Trouver l'utilisateur et enregistrer le jeton avec une date d'expiration
    const user = await User.findById(req.user._id);
    if (!user) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ message: 'Utilisateur non trouvé.' });
    }

    user.deleteToken = deleteToken;
    user.deleteTokenExpiration = new Date(Date.now() + 3600000); // 1 heure pour l'expiration
    await user.save();

    // Envoyer l'email de suppression
    await emailService.sendDeleteAccountEmail(user.email, deleteToken);

    res
      .status(HTTP_STATUS.OK)
      .json({ message: 'E-mail de suppression de compte envoyé.' });
  } catch (error: any) {
    logger.error('Erreur lors de la demande de suppression de compte:', error);
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: 'Erreur du serveur.' });
  }
};

export const confirmDeleteToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { deleteToken } = req.params;
    console.log('deleteToken', deleteToken);

    // Trouver l'utilisateur avec le jeton de suppression valide et le supprimer
    const result = await User.deleteOne({
      deleteToken: deleteToken,
      deleteTokenExpiration: { $gt: Date.now() },
    });

    console.log('result', result);

    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ message: 'Jeton invalide ou compte déjà supprimé.' });
    }

    res
      .status(HTTP_STATUS.OK)
      .json({ message: 'Compte supprimé avec succès.' });
  } catch (error: any) {
    // Gestion des erreurs
    next(new CustomError('DeleteAccountError', error.message, 500));
  }
};
