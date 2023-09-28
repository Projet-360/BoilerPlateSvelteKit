import winston from 'winston';
import { env } from '../constants/env.js';

const logger = winston.createLogger({
	level: 'info',
	format: winston.format.json(),
	transports: [
		new winston.transports.File({ filename: 'error.log', level: 'error' }),
		new winston.transports.File({ filename: 'combined.log' })
	]
});

if (env.NODE_ENV !== 'production') {
	logger.add(
		new winston.transports.Console({
			format: winston.format.simple()
		})
	);
}

export default logger;
