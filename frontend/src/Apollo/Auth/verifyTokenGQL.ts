import { gql } from "@apollo/client/core";

export const verifyTokenGQL = gql`
  query VerifyToken($token: String!) {
    verifyToken(token: $token) {
      message
    }
  }  
`
