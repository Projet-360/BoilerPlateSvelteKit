import { gql } from "@apollo/client/core";

export const GET_USER_SESSION = gql`
query GetUserSessions {
  getUserSessions {
      id
      device
      location
      createdAt
    }
  }
`
