import { gql } from "@apollo/client/core";

export const getGreetingsGQL = gql`
  query getGreetingsGQL {
    getGreetingsGQL {
      id
      name
      message
    }
  }
`;