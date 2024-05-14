import { gql } from 'apollo-server-express';

const verifyTokenType = gql`
  type Query {
    verifyToken(token: String!): MessageResponse
  }

  type MessageResponse {
    message: String
  }
`;

export default verifyTokenType;
