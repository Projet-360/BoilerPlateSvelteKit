import { gql } from "@apollo/client/core";

export const sendEmailResetPasswordGQL = gql`
mutation SendEmailResetPassword($email: String!) {
    sendEmailResetPassword(email: $email) {
      message
    }
  }
`
