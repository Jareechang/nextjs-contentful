import { ApolloClient, InMemoryCache } from '@apollo/client';
import config from './config';
import * as queries from './queries'
import ApolloClientWrapper from './apollo-client-wrapper';

const cache = new InMemoryCache({});

const client = new ApolloClientWrapper(
  `https://graphql.contentful.com/content/v1/spaces/${config.space}?access_token=${config.access_token}`
)

  //new ApolloClient({
  //uri: `https://graphql.contentful.com/content/v1/spaces/${config.space}?access_token=${config.access_token}`
//,
  //cache
//});

export {
  queries,
  client
};
