import { NextFunction, Request, Response } from 'express';

import dotenv from 'dotenv';
import checkAuth from './Auth/checkAuth.js';
import verifyToken from './Auth/verifyToken.js';
import getDashboardData from './Auth/getDashboardData.js';
import signup from './Auth/signup.js';
import login from './Auth/login.js';
import logout from './Auth/logout.js';
import sendEmailResetPassword from './Auth/sendEmailResetPassword.js';
import resetForgotNewPassword from './Auth/resetForgotNewPassword.js';
dotenv.config();

interface Context {
  req: Request;
  res: Response;
  next: NextFunction;
  io: any;
}

export const authResolver = {
  Query: {
    checkAuth: async (_: any, __: any, context: Context) =>
      checkAuth(context.req, context.res),

    verifyToken: async (_: any, args: { token: string }) =>
      verifyToken(args.token),

    getDashboardData: async (_: any, __: any, context: Context) =>
      getDashboardData(context.req),
  },
  Mutation: {
    signup: async (
      _: any,
      args: { username: string; email: string; password: string },
    ) => signup(args.username, args.email, args.password),

    login: async (
      _: any,
      args: { email: string; password: string; fingerPrint: any },
      context: Context,
    ) => login(args.email, args.password, args.fingerPrint, context.res),

    logout: async (_: any, __: any, context: Context) =>
      logout(context.req, context.res),

    sendEmailResetPassword: async (
      _: any,
      args: { email: string },
      context: Context,
    ) => sendEmailResetPassword(args.email, context.next),

    resetForgotNewPassword: async (
      _: any,
      args: { token: string; newPassword: string; confirmPassword: string },
      context: Context,
    ) =>
      resetForgotNewPassword(
        args.token,
        args.newPassword,
        args.confirmPassword,
        context.next,
      ),
  },
};
