import { gql } from 'apollo-server-express';

export const checkAuthType = gql`
  type Query {
    checkAuth: CheckAuth
  }

  type CheckAuth {
    isAuthenticated: Boolean
    role: String
    userId: String
    userData: UserData
  }
`;
