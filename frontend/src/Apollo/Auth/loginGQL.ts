import { gql } from '@apollo/client/core'

export const loginGQL = gql`
  mutation Login(
    $email: String!
    $password: String!
    $fingerPrint: fingerPrint!
  ) {
    login(email: $email, password: $password, fingerPrint: $fingerPrint) {
      role
    }
  }
`
