import {
  ApolloClient,
  gql,
  InMemoryCache,
  // HttpLink,
  // from,
} from '@apollo/client';
// import { onError } from '@apollo/client/link/error';

// const httpLink = new HttpLink({
//   uri: 'https://graphql.anilist.co',
// });

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (networkError) {
//     console.warn(`${networkError}`);
//   }
//   if (graphQLErrors) {
//     throw new Error(graphQLErrors[0].message);
//   }
// });

const apolloClient = new ApolloClient({
  // link: from([errorLink, httpLink]),
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});

export { apolloClient, gql };
