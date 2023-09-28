import { env } from '../constants/env.js';

const config = {
	PORT: env.PORT || 3001,
	DB_URI: env.BD,
	TOKEN_EXPIRY: env.TOKEN_EXPIRY || '1h',
	SECRETKEY: env.SECRETKEY || 'your-secret-key',
	VERIFICATION_EXPIRY_HOURS: 24
};

export default config;
