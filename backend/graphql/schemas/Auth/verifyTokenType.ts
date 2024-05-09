import { gql } from 'apollo-server-express';

export const verifyTokenType = gql`
  type Query {
    verifyToken(token: String!): MessageResponse
  }

  type MessageResponse {
    message: String
  }
`;
