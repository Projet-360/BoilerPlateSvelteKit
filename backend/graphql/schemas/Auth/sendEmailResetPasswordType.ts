import { gql } from 'apollo-server-express';

export const sendEmailResetPasswordType = gql`
  type Mutation {
    sendEmailResetPassword(email: String!): MessageResponse
  }

  type MessageResponse {
    message: String
  }
`;
