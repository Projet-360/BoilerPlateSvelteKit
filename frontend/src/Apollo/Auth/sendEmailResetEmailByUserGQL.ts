import { gql } from '@apollo/client/core'

export const sendEmailResetEmailByUserGQL = gql`
  mutation sendEmailResetEmailByUser($email: String!) {
    sendEmailResetEmailByUser(email: $email) {
      message
    }
  }
`
