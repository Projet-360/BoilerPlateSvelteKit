import jwt from 'jsonwebtoken';
import config from '../config/config.js';

export const isAuthenticated = (req, res, next) => {
	const token = req.cookies['token']; // Remplace 'yourCookieName' par le nom réel de ton cookie

	// Pas de token, pas d'autorisation
	if (!token) {
		return res.status(401).json({ error: 'Unauthorized' });
	}

	// Vérifions le token
	jwt.verify(token, config.SECRETKEY, (err, decoded) => {
		if (err) {
			return res.status(401).json({ error: 'Invalid token' });
		}

		// Stockons les données décodées pour les utiliser plus tard
		req.user = decoded;
		next();
	});
};
