import { gql } from 'apollo-server-express';

const signupType = gql`
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

export default signupType;
