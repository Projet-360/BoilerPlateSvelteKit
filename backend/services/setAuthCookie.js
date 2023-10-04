// Import required configurations
import { env } from '../constants/env.js';

// Function to set authentication cookie
export function setAuthCookie(res, token) {
	// Define cookie options
	const cookieOptions = {
		// HttpOnly flag to prevent client-side script access
		httpOnly: true,
		// Secure flag to ensure cookie is only sent over HTTPS (enabled in production)
		secure: env.NODE_ENV === 'production',
		// SameSite policy to mitigate CSRF attacks
		sameSite: 'strict',
		// Cookie expiry time in milliseconds (1 hour)
		maxAge: 3600000
	};

	// Set the cookie in the response
	res.cookie('token', token, cookieOptions);
}
