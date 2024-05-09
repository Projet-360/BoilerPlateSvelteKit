import { gql } from "@apollo/client/core";

export const SENDEMAILRESETPASSWORD = gql`
mutation SendEmailResetPassword($email: String!) {
    sendEmailResetPassword(email: $email) {
      message
    }
  }
`
