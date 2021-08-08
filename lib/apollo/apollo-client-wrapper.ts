import {
  createHttpLink,
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  QueryOptions
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

class ApolloClientWrapper {
  private uri: string;
  private client: ApolloClient<NormalizedCacheObject>;

  constructor({ host, pathname, token }) {
    if (!host || !pathname || !token) {
      throw new Error(
        'ApolloClientWrapper requires host, pathname and token to initialize'
      );
    }
    const httpLink = createHttpLink({
      uri: `${host}${pathname}`
    });
    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        }
      }
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
