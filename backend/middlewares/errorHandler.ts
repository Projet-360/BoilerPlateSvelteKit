import { Request, Response, NextFunction } from 'express'; // Import types from express
import CustomError from '../services/errors/CustomError.js';
import dotenv from 'dotenv';

dotenv.config();

import logger from '../services/logger.js';

// Annotate types for function parameters
const errorHandler = (
  err: Error | CustomError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err.stack);

  let statusCode = 500; // Default to Internal Server Error

  // Check if the error is an instance of CustomError
  if (err instanceof CustomError) {
    logger.info('CustomError captured in errorHandler:', err);
    statusCode = err.statusCode; // Set the status code to the one provided by CustomError
  }

  // If the error is not a CustomError but has the name 'ValidationError', set status to Bad Request
  if (err.name === 'ValidationError') {
    statusCode = 400;
  }

  // Determine the error message based on the environment
  const errorMessage =
    process.env.NODE_ENV === 'production' ? 'An error occurred' : err.message;

  // Send the appropriate status code and error message in the response
  res.status(statusCode).json({ message: errorMessage });
};

export default errorHandler;
