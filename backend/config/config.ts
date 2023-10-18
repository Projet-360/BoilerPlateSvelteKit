import { env } from '../constants/env.js';

const config = {
	PORT: env.PORT,
	DB_URI: env.BD,
	TOKEN_EXPIRY: env.TOKEN_EXPIRY,
	SECRETKEY: env.SECRETKEY,
	VERIFICATION_EXPIRY_HOURS: 24
};

export default config;
