import { gql } from "@apollo/client/core";

export const REQUEST_ACCOUNT_DELETION = gql`
mutation RequestAccountDeletion($userId: ID!) {
    requestAccountDeletion(userId: $userId) {
      message
    }
  }
`
