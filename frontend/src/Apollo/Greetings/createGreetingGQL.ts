import { gql } from "@apollo/client/core";

export const createGreetingGQL = gql`
  mutation CreateGreeting($name: String!, $message: String!) {
    createGreeting(name: $name, message: $message) {
      id
      name
      message
    }
  }
`