// Import required modules
import jwt from 'jsonwebtoken';
import config from '../config/config.js';

// Middleware to check if the user is authenticated
export const isAuthenticated = (req, res, next) => {
	// Retrieve the token from the authorization header
	const tokenHeader = req.headers['authorization'];
	const token = tokenHeader.split(' ')[1];

	// Check if the token is present
	if (!token) {
		return res.status(401).json({ error: 'Unauthorized' });
	}

	// Verify the token
	jwt.verify(token, config.SECRETKEY, (err, decoded) => {
		if (err) {
			return res.status(401).json({ error: 'Invalid token' });
		}

		// Store the decoded data for use in other middlewares or routes
		req.user = decoded;
		next();
	});
};
