import { gql } from 'apollo-server-express';

export const authType = gql`
  type Query {
    verifyToken(token: String!): MessageResponse
    checkAuth: CheckAuth
    getDashboardData: getDashboardDataResponse
  }

  type Mutation {
    signup(
      username: String!
      email: String!
      password: String!
    ): MessageResponse
    login(
      email: String!
      password: String!
      fingerPrint: fingerPrint!
    ): LoginResponse
    logout: MessageResponse
    sendEmailResetPassword(email: String!): MessageResponse
    resetForgotNewPassword(
      token: String!
      newPassword: String!
      confirmPassword: String!
    ): MessageResponse
  }

  input fingerPrint {
    userAgent: String
    screenResolution: String
    timezone: String
    webglVendor: String
    webglRenderer: String
    canvasFingerprint: String
    localIPs: [String]
  }

  type MessageResponse {
    message: String
  }

  type getDashboardDataResponse {
    userId: String
    role: String
    sessionId: String
    isVerified: Boolean
    userData: UserData
  }

  type LoginResponse {
    role: String
    userId: String
    sessionId: String
    userData: UserData
  }

  type UserData {
    username: String
    email: String
  }

  type CheckAuth {
    isAuthenticated: Boolean
    role: String
    userId: String
    userData: UserData
  }
`;
