import { gql } from "@apollo/client/core";

export const logoutGQL = gql`
mutation Logout {
    logout {
      message
    }
  }
`;