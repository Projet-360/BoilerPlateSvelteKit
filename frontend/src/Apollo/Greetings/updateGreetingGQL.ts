import { gql } from "@apollo/client/core";

export const updateGreetingGQL = gql`
  mutation UpdateGreeting($id: ID!, $name: String!, $message: String!) {
    updateGreeting(id: $id, name: $name, message: $message) {
      id
      name
      message
    }
  }
`;
