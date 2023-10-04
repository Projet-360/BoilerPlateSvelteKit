// Import required modules
import rateLimit from 'express-rate-limit';
// Note: logger and HTTP_STATUS should also be imported here if they are used

// Configure rate limiter middleware
export const rateLimiter = rateLimit({
	// Window duration for rate limiting in milliseconds (15 minutes)
	windowMs: 15 * 60 * 1000,
	// Maximum number of requests allowed within the window duration
	max: 40,
	// Custom handler function when rate limit is exceeded
	handler: function (req, res) {
		// Log the rate limit reached event
		logger.info('Rate limit reached'); // Make sure to import 'logger'
		// Respond with a 429 status code and a JSON message
		res.status(HTTP_STATUS.TOO_MANY_REQUESTS).json({
			// Make sure to import 'HTTP_STATUS'
			message: 'RATE_LIMIT'
		});
	}
});
