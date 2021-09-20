import {Platform} from 'react-native';

export const BACKEND_ENDPOINT = __DEV__
  ? Platform.select({
      ios: 'http://localhost:8080',
      android: 'http://10.0.2.2:8080',
    })
  : 'http://localhost:8080';
