// authController.js
import { Request, Response, NextFunction } from 'express';
import BlacklistedToken from '../../models/BlacklistedTokenModel.js';
import { Session } from '../../models/sessionModel.js';

export const sessions = async (req: Request, res: Response) => {
  console.log('Route /sessions atteinte');
  if (!req.user || !req.user._id) {
    console.log('Utilisateur non authentifié dans /sessions');
    return res.status(401).json({ message: 'Utilisateur non authentifié' });
  }

  try {
    const sessions = await Session.find({ userId: req.user._id }).exec();
    console.log('sessions', sessions);
    res.json(
      sessions.map((s) => ({
        id: s._id,
        userAgent: s.userAgent,
        browser: s.browser, // Assurez-vous que ces champs existent dans votre modèle
        os: s.os, // Assurez-vous que ces champs existent dans votre modèle
        device: s.device, // Assurez-vous que ces champs existent dans votre modèle
        ip: s.ip,
        createdAt: s.createdAt,
      })),
    );
  } catch (error) {
    console.error('Erreur lors de la récupération des sessions', error);
    res.status(500).json({ message: 'Erreur interne du serveur' });
  }
};

export const sessionID = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { sessionId } = req.params;

  if (!req.user || !req.user._id) {
    return res.status(401).json({ message: 'Utilisateur non authentifié' });
  }

  try {
    const session = await Session.findOneAndDelete({
      _id: sessionId,
      userId: req.user._id,
    }).exec();

    if (!session) {
      return res
        .status(404)
        .json({ message: 'Session non trouvée ou déjà fermée' });
    }

    // Supposons que le token est stocké dans un cookie nommé 'token'
    const token = req.cookies.token;
    if (token) {
      const newBlacklistedToken = new BlacklistedToken({ token });
      await newBlacklistedToken.save();
      res.clearCookie('token');
    }

    res.json({ message: 'Session fermée avec succès' });
  } catch (error) {
    console.error('Erreur lors de la fermeture de la session :', error);
    return res.status(500).json({ message: 'Erreur interne du serveur' });
  }
};
