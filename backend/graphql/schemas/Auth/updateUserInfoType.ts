import { gql } from 'apollo-server-express';

export const updateUserInfoType = gql`
  type Mutation {
    updateUserInfo(
      id: String!
      username: String!
      email: String!
      role: String!
    ): MessageResponse
  }

  type MessageResponse {
    id: String!
    username: String!
    email: String!
    role: String!
  }
`;
