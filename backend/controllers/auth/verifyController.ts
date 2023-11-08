// authController.js
import { Request, Response, NextFunction } from 'express';
import { HTTP_STATUS } from '../../constants/HTTP_STATUS.js';
import * as authService from '../../services/authService.js';

export const verify = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;

    const message = await authService.verifyToken(token);

    res.status(HTTP_STATUS.OK).json({ success: true });
  } catch (error: any) {
    console.error("Erreur lors de la vérification de l'e-mail:", error);
    res.status(500).json({ message: error.message });
  }
};
