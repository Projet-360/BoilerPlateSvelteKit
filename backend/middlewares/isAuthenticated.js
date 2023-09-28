import jwt from 'jsonwebtoken';
import config from '../config/config.js';

export const isAuthenticated = (req, res, next) => {
	// Récupère le token depuis les headers
	const tokenHeader = req.headers['authorization'];
	const token = tokenHeader.split(' ')[1];

	// Vérifie si le token est présent
	if (!token) {
		return res.status(401).json({ error: 'Non autorisé' });
	}

	// Vérifie le token
	jwt.verify(token, config.SECRETKEY, (err, decoded) => {
		// Remplace 'TON_SECRET' par ta propre clé secrète
		if (err) {
			return res.status(401).json({ error: 'Token invalide' });
		}

		// Stocke les données décodées pour les utiliser dans les autres middlewares ou routes
		req.user = decoded;
		next();
	});
};
