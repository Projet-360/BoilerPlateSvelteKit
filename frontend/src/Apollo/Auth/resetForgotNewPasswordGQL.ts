import { gql } from "@apollo/client/core";

export const resetForgotNewPasswordGQL = gql`
mutation ResetForgotNewPassword($token: String!, $newPassword: String!, $confirmPassword: String!) {
    resetForgotNewPassword(token: $token, newPassword: $newPassword, confirmPassword: $confirmPassword) {
      message
    }
  }
`