
import { gql } from "@apollo/client/core";

export const CLOSE_USER_SESSION = gql`
mutation CloseUserSession($sessionId: ID!) {
    closeUserSession(sessionId: $sessionId) {
      message
    }
  }
`