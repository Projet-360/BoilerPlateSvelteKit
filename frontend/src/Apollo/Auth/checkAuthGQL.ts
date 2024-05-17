import { gql } from '@apollo/client/core'

export const checkAuthGQL = gql`
  query CheckAuth {
    checkAuth {
      isAuthenticated
      role
    }
  }
`
