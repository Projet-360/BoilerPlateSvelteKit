import { gql } from "@apollo/client/core";

export const VERIFYTOKEN = gql`
  query VerifyToken($token: String!) {
    verifyToken(token: $token) {
      message
    }
  }  
`
