import { gql } from 'apollo-server-express';

const sendEmailResetPasswordType = gql`
  type Mutation {
    sendEmailResetPassword(email: String!): MessageResponse
  }

  type MessageResponse {
    message: String
  }
`;

export default sendEmailResetPasswordType;
