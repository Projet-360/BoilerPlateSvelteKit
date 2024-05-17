import { gql } from '@apollo/client/core'

export const UPDATE_USER = gql`
  mutation UpdateUser($userId: String!, $userData: UserInput!) {
    updateUser(userId: $userId, userData: $userData) {
      success
      user {
        name
        email
        role
      }
      notification
    }
  }
`
