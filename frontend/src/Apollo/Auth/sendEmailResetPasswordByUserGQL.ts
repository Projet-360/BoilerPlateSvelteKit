import { gql } from '@apollo/client/core'

export const sendEmailResetPasswordByUserGQL = gql`
  mutation sendEmailResetPasswordByUser {
    sendEmailResetPasswordByUser {
      message
    }
  }
`
