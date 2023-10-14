import jwt from 'jsonwebtoken';
import config from '../config/config.js';

export const isAuthenticated = async (req, res, next) => {
	// Récupérez le token à partir du cookie
	const token = req.cookies['token'];

	// Vérifiez si le token est présent
	if (!token) {
		console.log('Aucun token fourni dans les cookies.');
		return res.status(401).json({ error: 'Unauthorized' });
	}

	try {
		// Vérifiez le token
		const decoded = await jwt.verify(token, config.SECRETKEY);

		// Stockez les données décodées pour les utiliser dans d'autres middlewares ou routes
		req.user = decoded;
		console.log('Token décodé:', decoded);

		next();
	} catch (err) {
		console.log('Erreur lors de la vérification du token:', err);
		return res.status(401).json({ error: 'Invalid token' });
	}
};
