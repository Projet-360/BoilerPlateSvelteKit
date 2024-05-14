import { gql } from 'apollo-server-express';

const resetForgotNewPasswordType = gql`
  type Mutation {
    resetForgotNewPassword(
      token: String!
      newPassword: String!
      confirmPassword: String!
    ): MessageResponse
  }

  type MessageResponse {
    message: String
  }
`;

export default resetForgotNewPasswordType;
