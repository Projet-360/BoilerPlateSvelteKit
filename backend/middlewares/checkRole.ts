import { NextFunction, Request, Response } from 'express';

// Middleware function to check user role
export const checkRole = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Check if a user is logged in and has the specified role
    if (req.user && req.user.role === role) {
      // If the user has the specified role, continue to the next middleware
      next();
    } else {
      // If the user doesn't have the specified role, respond with a 403 Forbidden status
      res.status(403).json({ message: 'Access denied: Unauthorized role' });
    }
  };
};
