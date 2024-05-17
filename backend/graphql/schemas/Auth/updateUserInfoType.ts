import { gql } from 'apollo-server-express';

const updateUserInfoType = gql`
  type Mutation {
    updateUserInfo(username: String!): MessageResponse
  }

  type MessageResponse {
    username: String!
  }
`;

export default updateUserInfoType;
