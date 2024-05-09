import { gql } from "@apollo/client/core";

export const GETDASHBOARDDATA = gql`
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