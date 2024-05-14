import { gql } from 'apollo-server-express';

// Définition du schéma GraphQL pour la demande de suppression de compte
export const requestAccountDeletionType = gql`
  type Mutation {
    requestAccountDeletion(id: ID!): MessageResponse
  }

  type MessageResponse {
    message: String
  }
`;
