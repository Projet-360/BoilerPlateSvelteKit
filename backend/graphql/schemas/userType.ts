import { gql } from 'apollo-server-express';

export const userType = gql`
  type Query {
    verifyToken(token: String!): MessageResponse
    checkAuth: CheckAuth
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
  }

  type MessageResponse {
    message: String
  }

  type LoginResponse {
    role: String
    userId: String
    sessionId: String
  }

  type CheckAuth {
    isAuthenticated: Boolean
    role: String
    userId: String
  }
`;
