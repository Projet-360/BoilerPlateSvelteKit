import jwt from 'jsonwebtoken';
import { connectToDatabase } from '$db/database';
import dotenv from 'dotenv';
import log from '$lib/utils/log';

dotenv.config();

/**
 * Verify the JWT token.
 * @param {string} token
 */
async function verifyToken(token: string) {
	try {
		const decoded = jwt.verify(token, process.env.MONGO_ONLINE as string);
		return decoded;
	} catch (error) {
		console.error('JWT Verification Error:', error);
		throw error;
	}
}

/**
 * Handle the request and response lifecycle.
 * @param {Object} context
 */
export async function handle({ event, resolve }) {
	const { request } = event;
	const cookies = request.headers.get('cookie');
	const token = cookies?.match(/token=([^\s;]+)/)?.[1];

	try {
		// Connect to the database
		await connectToDatabase();
	} catch (error) {
		console.error('Database Connection Error:', error);
		throw error;
	}

	if (token) {
		try {
			// Verify JWT token and attach user to locals
			const user = await verifyToken(token);
			event.locals.user = user;
		} catch (error) {
			console.error('Token Verification Failed:', error);
		}
	}

	log.bold(`📣 NEW REQUEST IS BEING MADE FROM ${event.url.pathname}`);
	log.hooks('hooks.server.ts');

	event.locals.secret = '🍌';

	// Handle the request
	const response = await resolve(event);
	log.bold(`🔥 THE PAGE IS READY, I'M SENDING THE RESPONSE`);

	try {
	} catch (error) {
		console.error('Database Disconnection Error:', error);
	}

	return response;
}
