import { NextFunction, Request, Response } from 'express';

import dotenv from 'dotenv';
dotenv.config();

import checkAuthResolver from './service/checkAuthResolver.js';
import verifyTokenResolver from './service/verifyTokenResolver.js';
import getDashboardDataResolver from './service/getDashboardDataResolver.js';
import signupResolver from './service/signupResolver.js';
import loginResolver from './service/loginResolver.js';
import logoutResolver from './service/logoutResolver.js';
import sendEmailResetPasswordResolver from './service/sendEmailResetPassword.js';
import resetForgotNewPasswordResolver from './service/resetForgotNewPasswordResolver.js';
import getAllUsersResolver from './service/getAllUsersResolver.js';
import updateUserInfoResolver from './service/updateUserInfoResolver.js';
import requestAccountDeletionResolver from './service/requestAccountDeletionResolver.js';
import sendEmailResetPasswordByUserResolver from './service/sendEmailResetPasswordByUserResolver.js';
import sendEmailResetEmailByUserResolver from './service/sendEmailResetEmailByUserResolver.js';

interface Context {
  req: Request;
  res: Response;
  next: NextFunction;
  io: any;
}

export const authResolver = {
  Query: {
    checkAuth: async (_: any, __: any, context: Context) =>
      checkAuthResolver(context.req, context.res),

    verifyToken: async (_: any, args: { token: string }) =>
      verifyTokenResolver(args.token),

    getDashboardData: async (_: any, __: any, context: Context) =>
      getDashboardDataResolver(context.req),

    getAllUsers: async (_: any, __: any, context: Context) =>
      getAllUsersResolver(context.req, context.res),
  },
  Mutation: {
    signup: async (
      _: any,
      args: { username: string; email: string; password: string },
    ) => signupResolver(args.username, args.email, args.password),

    login: async (
      _: any,
      args: { email: string; password: string; fingerPrint: any },
      context: Context,
    ) =>
      loginResolver(args.email, args.password, args.fingerPrint, context.res),

    logout: async (_: any, __: any, context: Context) =>
      logoutResolver(context.req, context.res),

    sendEmailResetPassword: async (
      _: any,
      args: { email: string },
      context: Context,
    ) => sendEmailResetPasswordResolver(args.email, context.next),

    resetForgotNewPassword: async (
      _: any,
      args: { token: string; newPassword: string; confirmPassword: string },
      context: Context,
    ) =>
      resetForgotNewPasswordResolver(
        args.token,
        args.newPassword,
        args.confirmPassword,
        context.next,
      ),

    updateUserInfo: async (
      _: any,
      args: { id: string; username: string },
      context: Context,
    ) => updateUserInfoResolver(args.username, context.req),

    requestAccountDeletion: async (_: any, args: {}, context: Context) =>
      requestAccountDeletionResolver(context.req, context.res),

    sendEmailResetPasswordByUser: async (_: any, args: {}, context: Context) =>
      sendEmailResetPasswordByUserResolver(
        context.req,
        context.res,
        context.next,
      ),

    sendEmailResetEmailByUser: async (
      _: any,
      args: { email: string },
      context: Context,
    ) =>
      sendEmailResetEmailByUserResolver(args.email, context.next, context.req),
  },
};
