import { gql } from 'apollo-server-express';

const updateUserInfoType = gql`
  type Mutation {
    updateUserInfo(
      id: String!
      username: String!
      email: String!
    ): MessageResponse
  }

  type MessageResponse {
    id: String!
    username: String!
    email: String!
  }
`;

export default updateUserInfoType;
