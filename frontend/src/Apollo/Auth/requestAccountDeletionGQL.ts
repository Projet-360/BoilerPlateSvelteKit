import { gql } from '@apollo/client/core'

export const requestAccountDeletionGQL = gql`
  mutation RequestAccountDeletion {
    requestAccountDeletion {
      message
    }
  }
`
