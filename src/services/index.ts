import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl52qg50p2csx01t3adptbg0k/master",
  cache: new InMemoryCache()
})