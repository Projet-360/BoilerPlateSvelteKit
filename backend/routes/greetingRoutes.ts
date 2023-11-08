import express from 'express';
import { greetingsValidators } from '../validations/validators.js';
import { handleValidationErrors } from '../middlewares/handleValidationErrors.js';
import { bruteForceRateLimiter } from '../services/rateLimiter.js';
import {
  deleteGreeting,
  getGreetings,
  saveGreeting,
  updateGreeting,
} from '../controllers/greetings/index.js';

// Read All
export default (io: any) => {
  const router = express.Router();
  router.get('/greetings', getGreetings);

  router.post(
    '/greetings',
    bruteForceRateLimiter,
    greetingsValidators,
    handleValidationErrors,
    saveGreeting,
  );

  // Read One
  router.get('/greetings/:id', getGreetings);

  // Update
  router.put(
    '/greetings/:id',
    bruteForceRateLimiter,
    greetingsValidators,
    handleValidationErrors,
    updateGreeting,
  );

  // Delete
  router.delete('/greetings/:id', deleteGreeting);

  return router;
};
