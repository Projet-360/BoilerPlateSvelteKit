import { gql } from 'apollo-server-express';

const sendEmailResetPasswordByUserType = gql`
  type Mutation {
    sendEmailResetPasswordByUser: MessageResponse
  }

  type MessageResponse {
    message: String
  }
`;

export default sendEmailResetPasswordByUserType;
