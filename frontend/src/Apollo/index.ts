import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from '@apollo/client/core/index.js'
import { onError } from '@apollo/client/link/error'
import type { ErrorResponse } from '@apollo/client/link/error'

const httpLink = new HttpLink({
  uri: 'https://localhost:2000/graphql',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

const errorLink = onError(
  ({ graphQLErrors, networkError, response }: ErrorResponse) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations?.map((l) => `${l.line}:${l.column}`).join(', ')}, Path: ${path}`,
        )
      })
    }
    if (networkError) {
      console.error(`[Network error]: ${networkError}`)
    }
  },
)

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache(),
})

export default client
