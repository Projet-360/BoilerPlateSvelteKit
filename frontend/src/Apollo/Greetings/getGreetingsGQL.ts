import { gql } from "@apollo/client/core";

export const getGreetingsGQL = gql`
  query getGreetings {
    getGreetings {
      id
      name
      message
    }
  }
`;