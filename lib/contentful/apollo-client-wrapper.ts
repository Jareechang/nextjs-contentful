import {
  createHttpLink,
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  QueryOptions
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import config from './config';

const authLink = setContext((_, { headers }) => {
  const token = config?.access_token ?? '';
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

class ApolloClientWrapper {
  private uri: string;
  private client: ApolloClient<NormalizedCacheObject>;

  constructor(uri) {
    const httpLink = createHttpLink({
      uri
    });
    const cache = new InMemoryCache({});
    this.client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache
    });
    return this;
  }

  public async query<T>(
    queryOptions: QueryOptions<any, any>
  ) : Promise<T | null> {
    let results = null;
    try {
      results = await this.client.query(queryOptions);
    } catch (ex) {
      console.error('Failed to fetch graphql query: ', queryOptions, ex);
    }
    return results;
  }
}

export default ApolloClientWrapper;
