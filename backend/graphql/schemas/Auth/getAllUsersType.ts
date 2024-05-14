import { gql } from 'apollo-server-express';

const getAllUsersType = gql`
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

export default getAllUsersType;
