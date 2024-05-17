import { Request, Response } from 'express';
import * as authService from '../../../../services/authService.js';

const getDashboardDataResolver = async (req: Request) => {
  const tokenKey = process.env.TOKEN_NAME as string;
  const token = req.cookies[tokenKey];
  console.log('token', token);
  const result = await authService.checkAuthService(token);

  if (!result || !result._id) {
    throw new Error('User not authenticated or user ID missing');
  }

  try {
    const userInfo = await authService.getUserInfo(result._id);

    const dataReturn: TS.GetDashboardDataResponse = {
      role: userInfo.role,
      sessionId: 'session wip',
      isVerified: userInfo.isVerified,
      userData: {
        username: userInfo.username as string,
      },
    };

    return dataReturn; // Ensure this matches your GraphQL schema expectations
  } catch (error) {
    console.error('Failed to fetch user info:', error);
    throw new Error('Failed to fetch user info');
  }
};
export default getDashboardDataResolver;
