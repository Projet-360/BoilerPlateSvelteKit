import { gql } from 'apollo-server-express';

const logoutType = gql`
  type Mutation {
    logout: MessageResponse
  }

  type MessageResponse {
    message: String
  }
`;

export default logoutType;
