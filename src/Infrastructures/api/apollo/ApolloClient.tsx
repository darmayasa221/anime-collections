/* istanbul ignore file */
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});

export { apolloClient, gql, ApolloClient };
