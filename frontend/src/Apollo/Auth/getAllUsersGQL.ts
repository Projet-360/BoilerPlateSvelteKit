import { gql } from '@apollo/client/core'

export const getAllUsersGQL = gql`
  query GetAllUsers {
    getAllUsers {
      id
      username
      email
      role
    }
  }
`
