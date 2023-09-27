import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 40,
	handler: function (req, res) {
		logger.info('Rate limit reached');
		res.status(HTTP_STATUS.TOO_MANY_REQUESTS).json({
			message: 'RATE_LIMIT'
		});
	}
});
