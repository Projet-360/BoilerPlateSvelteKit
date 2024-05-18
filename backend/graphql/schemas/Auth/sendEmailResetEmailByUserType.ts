import { gql } from 'apollo-server-express';

const sendEmailResetEmailByUserType = gql`
  type Mutation {
    sendEmailResetEmailByUser(email: String!): MessageResponse
  }

  type MessageResponse {
    message: String
  }
`;

export default sendEmailResetEmailByUserType;
