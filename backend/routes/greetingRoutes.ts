import { Request, Response } from 'express';
import express from 'express';
import Greeting from '../models/GreetingModel.js';
import { greetingsValidators } from '../validations/validators.js';
import { handleValidationErrors } from '../middlewares/handleValidationErrors.js';
import { bruteForceRateLimiter } from '../services/rateLimiter.js';

// Read All
export default (io: any) => {
  const router = express.Router();
  router.get('/getGreetings', async (req: Request, res: Response) => {
    const greetings = await Greeting.find({});
    res.json(greetings);
  });

  router.post(
    '/saveGreeting',
    bruteForceRateLimiter,
    greetingsValidators,
    handleValidationErrors,
    async (req: Request, res: Response) => {
      const { name, message } = req.body;

      const greeting = new Greeting({ name, message });
      await greeting.save();

      res.json({ status: 'saved' });
    },
  );

  // Read One
  router.get('/getGreeting/:id', async (req: Request, res: Response) => {
    const greeting = await Greeting.findById(req.params.id);
    res.json(greeting);
  });

  // Update
  router.put(
    '/updateGreeting/:id',
    bruteForceRateLimiter,
    greetingsValidators,
    handleValidationErrors,
    async (req: Request, res: Response) => {
      const updatedGreeting = await Greeting.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
      );
      res.json(updatedGreeting);
    },
  );

  // Delete
  router.delete('/deleteGreeting/:id', async (req: Request, res: Response) => {
    await Greeting.findByIdAndDelete(req.params.id);
    res.json({ status: 'deleted' });
  });

  return router;
};
