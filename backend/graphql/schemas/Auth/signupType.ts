import { gql } from 'apollo-server-express';

export const signupType = gql`
  type Mutation {
    signup(
      username: String!
      email: String!
      password: String!
    ): MessageResponse
  }

  type MessageResponse {
    message: String
  }
`;
