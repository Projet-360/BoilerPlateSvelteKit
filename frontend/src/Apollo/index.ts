import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    gql
} from '@apollo/client/core/index.js'; // Importation correcte des modules Apollo Client

// Configuration de HttpLink avec credentials inclus
const httpLink = new HttpLink({
    uri: 'https://localhost:2000/graphql',
    credentials: 'include'
});

// Création du client Apollo avec le lien HTTP configuré
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default client;
export { gql };
