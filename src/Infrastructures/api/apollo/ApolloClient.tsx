/* istanbul ignore file */
import fetch from 'cross-fetch';
import {
  ApolloClient, InMemoryCache, gql, HttpLink,
} from '@apollo/client';

const httpLinkTest = new HttpLink({
  uri: 'https://graphql.anilist.co',
  fetch,
});
const httpLink = new HttpLink({
  uri: 'https://graphql.anilist.co',
  fetch,
});

const apolloClient = new ApolloClient({
  link: process.env.NODE_ENV === 'test' ? httpLinkTest : httpLink,
  cache: new InMemoryCache(),
});

export { apolloClient, gql };
