import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

const link = new HttpLink({
  uri: `${process.env.API_URL}`,
  fetch,
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
