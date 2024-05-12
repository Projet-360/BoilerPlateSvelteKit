import { Request, Response } from 'express';
import * as authService from '../../../../services/authService.js';

const getAllUsersResolver = async (req: Request, res: Response) => {
  try {
    const users = await authService.getAllUsers();

    return users;
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
    res.status(500).json({ message: 'Erreur du serveur.' });
  }
};

export default getAllUsersResolver;
