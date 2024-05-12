import { gql } from 'apollo-server-express';

export const getAllUsersType = gql`
  type Query {
    getAllUsers: [getAllUsers]
  }

  type getAllUsers {
    id: String
    username: String
    email: String
    role: String
  }
`;
