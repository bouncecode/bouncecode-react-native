import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';
import {ThemeProvider} from 'styled-components';
import {ApolloProvider} from '@apollo/react-hooks';
import theme from './lib/theme';
import apolloClient from './lib/apolloClient';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './navigators/TabNavigator';

const App = () => {
  const preLoad = async () => {
    SplashScreen.hide();
  };

  useEffect(() => {
    preLoad();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
