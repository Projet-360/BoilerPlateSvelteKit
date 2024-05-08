import { NextFunction, Request, Response } from 'express';
import BlacklistedToken from '../models/BlacklistedTokenModel.js';

// Middleware function to check if a token is blacklisted
const checkBlacklist = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Retrieve the token from the request cookies
    const tokenKey = process.env.TOKEN_NAME as string;
    const token = req.cookies[tokenKey];

    // Check if the token exists in the BlacklistedToken collection
    const isBlacklisted = await BlacklistedToken.findOne({ token });

    if (isBlacklisted) {
      // If the token is blacklisted, respond with a 401 Unauthorized status and a message
      return res.status(401).json({ message: 'Invalid token' });
    }

    // If the token is not blacklisted, proceed to the next middleware
    next();
  } catch (error) {
    // If an error occurs, pass it to the error handling middleware
    next(error);
  }
};

export default checkBlacklist;
