import { greetingType } from './greetingType.js';

import { getDashboardDataType } from './Auth/getDashboardDataType.js';
import { loginType } from './Auth/loginType.js';
import { logoutType } from './Auth/logoutType.js';
import { resetForgotNewPasswordType } from './Auth/resetForgotNewPasswordType.js';
import { sendEmailResetPasswordType } from './Auth/sendEmailResetPasswordType.js';
import { signupType } from './Auth/signupType.js';
import { verifyTokenType } from './Auth/verifyTokenType.js';
import { checkAuthType } from './Auth/checkAuthType.js';

export const typeDefs = [
  greetingType,

  checkAuthType,
  getDashboardDataType,
  loginType,
  logoutType,
  resetForgotNewPasswordType,
  sendEmailResetPasswordType,
  signupType,
  verifyTokenType,
];
