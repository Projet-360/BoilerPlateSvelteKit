import { gql } from 'apollo-server-express';

export const logoutType = gql`
  type Mutation {
    logout: MessageResponse
  }

  type MessageResponse {
    message: String
  }
`;
