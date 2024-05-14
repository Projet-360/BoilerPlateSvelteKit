import { gql } from 'apollo-server-express';

const greetingType = gql`
  type Greeting {
    id: ID!
    name: String!
    message: String!
  }

  type Query {
    getGreetings: [Greeting!]!
    getGreetingById(id: ID!): Greeting
  }

  type Mutation {
    createGreeting(name: String!, message: String!): Greeting!
    updateGreeting(id: ID!, name: String!, message: String!): Greeting!
    deleteGreeting(id: ID!): ID!
  }

  type Subscription {
    greetingAdded: Greeting!
    greetingUpdated: Greeting!
    greetingDeleted: ID!
  }
`;

export default greetingType;
