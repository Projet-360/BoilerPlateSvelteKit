import { gql } from "@apollo/client/core";

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      id
      name
      email
      role
    }
  }
`;
