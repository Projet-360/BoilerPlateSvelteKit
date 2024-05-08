import { gql } from 'apollo-server-express';

export const authType = gql`
  type Query {
    verifyToken(token: String!): MessageResponse
    checkAuth: CheckAuth
    getDashboardData: MessageResponse
  }

  type Mutation {
    signup(
      username: String!
      email: String!
      password: String!
    ): MessageResponse
    login(email: String!, password: String!): LoginResponse
    logout: MessageResponse
    sendEmailResetPassword(email: String!): MessageResponse
    resetForgotNewPassword(
      token: String!
      newPassword: String!
      confirmPassword: String!
    ): MessageResponse
  }

  type MessageResponse {
    message: String
  }

  type LoginResponse {
    role: String
    userId: String
    sessionId: String
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
