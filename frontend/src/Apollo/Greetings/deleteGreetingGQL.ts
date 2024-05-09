import { gql } from "@apollo/client/core";

export const deleteGreetingGQL = gql`
  mutation DeleteGreeting($id: ID!) {
    deleteGreeting(id: $id)
  }
`;
