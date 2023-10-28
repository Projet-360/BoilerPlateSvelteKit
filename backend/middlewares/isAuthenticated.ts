import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';

import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, './../.env');
dotenv.config({ path: envPath });

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies['token'];

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

      req.user = decoded as JwtPayload;
      next();
    },
  );
};
