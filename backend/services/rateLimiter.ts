import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const isDev = process.env.NODE_ENV === 'dev';

const RATE_LIMIT_WINDOW_MS = isDev ? 24 * 60 * 60 * 1000 : 15 * 60 * 1000; // 24 hours in dev, 15 minutes in prod
const RATE_LIMIT_MAX_REQUESTS = isDev ? 10000 : 40; // 10000 requests in dev, 40 in prod

export const rateLimiter = rateLimit({
  windowMs: RATE_LIMIT_WINDOW_MS,
  max: RATE_LIMIT_MAX_REQUESTS,
  handler: function (req, res) {
    res.status(429).json({
      message: 'RATE_LIMIT',
    });
  },
});

const BRUTE_FORCE_WINDOW_MS = isDev ? 24 * 60 * 60 * 1000 : 1 * 60 * 1000; // 24 hours in dev, 1 minute in prod
const BRUTE_FORCE_MAX_REQUESTS = isDev ? 10000 : 5; // 10000 requests in dev, 5 in prod

export const bruteForceRateLimiter = rateLimit({
  windowMs: BRUTE_FORCE_WINDOW_MS,
  max: BRUTE_FORCE_MAX_REQUESTS,
  handler: function (req, res) {
    res.status(429).json({
      message: 'RATE_LIMIT',
    });
  },
});
