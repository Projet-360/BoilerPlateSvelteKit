import { gql } from '@apollo/client/core'

export const requestAccountDeletionGQL = gql`
  mutation RequestAccountDeletion($id: ID!) {
    requestAccountDeletion(id: $id) {
      message
    }
  }
`
