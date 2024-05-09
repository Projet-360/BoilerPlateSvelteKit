import { gql } from "@apollo/client/core";

export const SIGNUP = gql`
  mutation Signup($username: String!, $email: String!, $password: String!) {
      signup(username: $username, email: $email, password: $password) {
        message
      }
    }
`