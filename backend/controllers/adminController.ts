// authController.js
import { Request, Response, NextFunction } from 'express';
import { HTTP_STATUS } from '../constants/HTTP_STATUS.js';
import * as authService from '../services/authService.js';

export const adminUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await authService.getAllUsers(); // Vous devrez implémenter cette méthode
    res.status(HTTP_STATUS.OK).json({ users });
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: 'Erreur du serveur.' });
  }
};

export const adminUserID = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { _id } = req.params;
    console.log('_id', _id);

    const updateData = req.body;
    const { success, notification, updatedUser } =
      await authService.updateUserInfo(_id, updateData);
    res
      .status(HTTP_STATUS.OK)
      .json({ message: 'Success', success, notification, updatedUser });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: 'Erreur du serveur.' });
  }
};
