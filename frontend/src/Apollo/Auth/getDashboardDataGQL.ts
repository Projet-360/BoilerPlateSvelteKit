import { gql } from "@apollo/client/core";

export const getDashboardDataGQL = gql`
query GetDashboardData {
    getDashboardData {
      userId
      role
      sessionId
      isVerified
      userData {
        username
        email
      }
    }
  }
`