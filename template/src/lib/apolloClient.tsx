export {ApolloProvider} from '@apollo/client';

import {ApolloClient, HttpLink, InMemoryCache, gql} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import jwtDecode from 'jwt-decode';
import {BACKEND_ENDPOINT} from '../config/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IJwt {
  exp: number;
}

interface IToken {
  access_token: string | null;
  refresh_token: string | null;
}

const getToken = async ({access_token, refresh_token}: IToken) => {
  if (access_token) {
    try {
      const {exp} = jwtDecode<IJwt>(access_token);

      if (Date.now() < (exp - 600) * 1000) {
        return access_token;
      }
    } catch (e) {}
  }

  if (refresh_token) {
    const res = await fetch(BACKEND_ENDPOINT + '/graphql', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        operationName: null,
        query: gql`
          mutation ($refreshToken: String!) {
            refreshToken(refreshToken: $refreshToken) {
              access_token
            }
          }
        `.loc?.source?.body,
        variables: {
          refreshToken: refresh_token,
        },
      }),
    });

    const {data} = await res.json();
    const access_token = data.refreshToken.access_token;
    await AsyncStorage.setItem('access_token', access_token);
    return access_token;
  }
};

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: BACKEND_ENDPOINT + '/graphql',
});

const authLink: any = setContext(async (_, {headers}) => {
  const refresh_token = await AsyncStorage.getItem('refresh_token');
  const access_token = await AsyncStorage.getItem('access_token');
  console.log('📜', access_token);
  let token: string | undefined;

  try {
    token = await getToken({access_token, refresh_token});
  } catch (e) {}

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const apolloClient = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
});

export default apolloClient;
