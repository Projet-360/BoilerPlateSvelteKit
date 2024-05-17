import { gql } from 'apollo-server-express';

const updateUserInfoType = gql`
  type Mutation {
    updateUserInfo(username: String!, email: String!): MessageResponse
  }

  type MessageResponse {
    username: String!
    email: String!
  }
`;

export default updateUserInfoType;
