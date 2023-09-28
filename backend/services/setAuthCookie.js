import { env } from '../constants/env.js';

export function setAuthCookie(res, token) {
	const cookieOptions = {
		httpOnly: true,
		secure: env.NODE_ENV === 'production',
		sameSite: 'strict',
		maxAge: 3600000 // 1 heure
	};

	res.cookie('token', token, cookieOptions);
}
