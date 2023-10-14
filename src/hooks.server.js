import jwt from 'jsonwebtoken'; // Assurez-vous que ce package est installé.
import { env } from './env.js';

async function verifyToken(token) {
	try {
		const decoded = jwt.verify(token, env.SECRETKEY);
		return decoded;
	} catch (error) {
		console.error('JWT Verification Error:', error); // Use a logging tool in production
		throw error; // Propagate the error
	}
}

export async function handle({ event, resolve }) {
	const cookies = event.cookies.get('token');

	if (cookies) {
		const user = await verifyToken(cookies);
		console.log('user du hook.server', cookies);
		console.log(user);
		if (user) {
			event.locals.user = user;
			console.log('User est ajouté aux locals:', event.locals.user);
		}
	}

	const response = await resolve(event);
	return response;
}
