import { gql } from 'apollo-server-express';

export const userType = gql`
  type Query {
    getGreetings: [Greeting!]!
  }

  type Greeting {
    id: ID!
    name: String!
    message: String!
  }
`;
