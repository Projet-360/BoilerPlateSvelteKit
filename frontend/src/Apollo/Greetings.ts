import { gql } from "@apollo/client/core";

export const GET_GREETINGS = gql`
  query GetGreetings {
    getGreetings {
      id
      name
      message
    }
  }
`;

export const CREATE_GREETING = gql`
  mutation CreateGreeting($name: String!, $message: String!) {
    createGreeting(name: $name, message: $message) {
      id
      name
      message
    }
  }
  
`;

export const UPDATE_GREETING = gql`
  mutation UpdateGreeting($id: ID!, $name: String!, $message: String!) {
    updateGreeting(id: $id, name: $name, message: $message) {
      id
      name
      message
    }
  }
`;

export const DELETE_GREETING = gql`
  mutation DeleteGreeting($id: ID!) {
    deleteGreeting(id: $id)
  }
`;
