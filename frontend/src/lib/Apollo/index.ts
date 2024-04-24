// C:\Web\BoilerPlateSvelteKit\frontend\src\lib\Apollo\index.ts
// src/lib/Apollo/index.ts
import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    gql
} from '@apollo/client/core/index.js'; // Note the added '/index.js'

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://localhost:2000/graphql',
    }),
    cache: new InMemoryCache()
});

export default client;
export { gql };
