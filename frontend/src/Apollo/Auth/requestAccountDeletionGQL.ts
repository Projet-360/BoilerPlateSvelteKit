import { gql } from "@apollo/client/core";

export const requestAccountDeletionGQL = gql`
mutation RequestAccountDeletion($userId: ID!) {
    requestAccountDeletion(userId: $userId) {
      message
    }
  }
`
