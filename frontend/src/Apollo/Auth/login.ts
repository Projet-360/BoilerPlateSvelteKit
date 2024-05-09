import { gql } from "@apollo/client/core";

export const LOGIN = gql`
mutation Login($email: String!, $password: String!, $fingerPrint: fingerPrint!) {
    login(email: $email, password: $password, fingerPrint: $fingerPrint) {
      role
      userId
      sessionId
      userData {
        username
        email
      }
    }
  }  
`;