import { gql } from 'apollo-server-express';

export const userType = gql`
  type Mutation {
    login(username: String!, password: String!): AuthPayload
    logout: Boolean
  }

  type Query {
    currentUser: User
    currentSessions: [Session]
  }

  type AuthPayload {
    user: User
    token: String
  }

  type User {
    id: ID!
    username: String
    email: String
    role: String
  }

  type Session {
    sessionId: String
    device: String
    lastActive: String
  }
`;
