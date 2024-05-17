import { Request, Response } from 'express';
import * as authService from '../../../../services/authService.js';
import BlacklistedToken from '../../../../models/BlacklistedTokenModel.js';

const checkAuthResolver = async (req: Request, res: Response) => {
  const tokenKey = process.env.TOKEN_NAME as string;
  const token = req.cookies[tokenKey];

  if (!token || token === 'undefined' || token === 'null') {
    return { isAuthenticated: false };
  }

  const isBlacklisted = await BlacklistedToken.findOne({ token });
  if (isBlacklisted) {
    res.clearCookie(process.env.TOKEN_NAME as string);
    return { isAuthenticated: false };
  }

  const result = await authService.checkAuthService(token);

  if (result.isAuthenticated) {
    return {
      isAuthenticated: true,
      role: result.role,
    };
  } else {
    return { isAuthenticated: false };
  }
};

export default checkAuthResolver;
