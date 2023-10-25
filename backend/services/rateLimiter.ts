// Import required modules
import rateLimit from 'express-rate-limit';
import { HTTP_STATUS } from '../constants/HTTP_STATUS.js';
import { messageReturn } from '../constants/errorMessages.js';

// Constants for general rate limiter configuration
// Preferably fetch these values from environment variables or config files
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 40;

// Configure general rate limiter middleware
export const rateLimiter = rateLimit({
  // Window duration for rate limiting in milliseconds
  windowMs: RATE_LIMIT_WINDOW_MS,
  // Maximum number of requests allowed within the window duration
  max: RATE_LIMIT_MAX_REQUESTS,
  // Custom handler function when rate limit is exceeded
  handler: function (req, res) {
    // Respond with a 429 status code and a JSON message
    res.status(HTTP_STATUS.TOO_MANY_REQUESTS).json({
      message: messageReturn.RATE_LIMIT,
    });
  },
});

// Constants for aggressive rate limiter against brute force attacks
const BRUTE_FORCE_WINDOW_MS = 1 * 60 * 1000; // 1 minute
const BRUTE_FORCE_MAX_REQUESTS = 5; // 5 requests per minute

// Configure aggressive rate limiter middleware against brute force attacks
export const bruteForceRateLimiter = rateLimit({
  windowMs: BRUTE_FORCE_WINDOW_MS,
  max: BRUTE_FORCE_MAX_REQUESTS,
  handler: function (req, res) {
    // Respond with a 429 status code and a JSON message
    res.status(HTTP_STATUS.TOO_MANY_REQUESTS).json({
      message: messageReturn.RATE_LIMIT,
    });
  },
});
