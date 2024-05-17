import { gql } from '@apollo/client/core'

export const getDashboardDataGQL = gql`
  query GetDashboardData {
    getDashboardData {
      role
      sessionId
      isVerified
      userData {
        username
      }
    }
  }
`
