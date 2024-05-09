import { gql } from "@apollo/client/core";

export const CONFIRM_ACCOUNT_DELETION = gql`
mutation ConfirmAccountDeletion($token: String!) {
    confirmAccountDeletion(token: $token) {
      message
    }
  }  
`