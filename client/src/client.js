import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';

const link = createHttpLink({
  uri: 'http://localhost:5000/graphql',
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

export default client;
