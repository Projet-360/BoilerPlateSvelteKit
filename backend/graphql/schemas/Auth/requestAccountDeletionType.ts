import { gql } from 'apollo-server-express';

// Définition du schéma GraphQL pour la demande de suppression de compte
const requestAccountDeletionType = gql`
  type Mutation {
    requestAccountDeletion: MessageResponse
  }

  type MessageResponse {
    message: String
  }
`;

export default requestAccountDeletionType;
