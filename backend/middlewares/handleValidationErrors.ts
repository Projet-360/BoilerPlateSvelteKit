import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import CustomError from '../services/errors/CustomError.js';

// Middleware function to handle validation errors
export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Check for validation errors using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // If there are validation errors, extract error messages
    const errorArray = errors.array().map((err) => err.msg);

    // Join the array into a single string
    const errorMessages: string = errorArray.join(', ');

    // Create a custom error object with the error messages and HTTP status code
    const validationError = new CustomError(
      'ValidationError',
      errorMessages,
      400,
    );

    // Pass the validation error to the next middleware
    return next(validationError);
  }

  // If there are no validation errors, proceed to the next middleware
  next();
};
