import { gql } from 'apollo-server-express';

const checkAuthType = gql`
  type Query {
    checkAuth: CheckAuth
  }

  type CheckAuth {
    isAuthenticated: Boolean
    role: String
  }
`;

export default checkAuthType;
