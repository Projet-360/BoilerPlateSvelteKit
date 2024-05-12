import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const tokenKey = process.env.TOKEN_NAME as string;
  const token = req.cookies[tokenKey];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(
    token,
    process.env.SECRETKEY as string,
    { complete: false },
    (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      }

      req.user = decoded as TS.IUser;
      next();
    },
  );
};
