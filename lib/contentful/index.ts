import { ApolloClient, InMemoryCache } from '@apollo/client';
import config from './config';
import * as queries from './queries'
import { ApolloClientWrapper } from '../apollo';

const client = new ApolloClientWrapper({
  host: 'https://graphql.contentful.com',
  pathname: `/content/v1/spaces/${config.space}`,
  token: config?.access_token
});

export {
  queries,
  client
};
