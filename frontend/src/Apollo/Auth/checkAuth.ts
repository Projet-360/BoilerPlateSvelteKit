import { gql } from "@apollo/client/core";

export const CHECKAUTH = gql`
query CheckAuth {
    checkAuth {
      isAuthenticated
      role
      userId
      userData {
        username
        email
      }
    }
  }
`
