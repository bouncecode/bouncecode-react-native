import React, {useEffect} from 'react';
// import {AppState} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import 'moment/locale/ko';
import moment from 'moment';
import {navigationRef} from './RootNavigation';
import apolloClient, {ApolloProvider} from './lib/apolloClient';
import theme, {ThemeProvider} from './lib/styledComponents';
import Main from './components/Main';

moment.locale('ko');

// import SplashNavigator from './navigators/SplashNavigator';
// import {RealmProvider} from './realm/RealmProvider';
// import {MainScreenContextProvider} from './components/Common/hooks/useMainScreen.context';
// import PushNotification from 'react-native-push-notification';
// import {
//   SoundModes,
//   updateConditionNotification,
// } from './components/Common/hooks/useSetting.storage';
// import VersionCheck from 'react-native-version-check';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import ShortcutBadge from 'react-native-app-badge';
// import useDeviceSize from './lib/useDeviceSize';

// const SETTING_VERSION = 1;

if (!__DEV__) {
  console.log = () => {};
}

const App = (props: any) => {
  // const {isLandscape} = useDeviceSize();

  const preLoad = async () => {
    // const settingVersion = parseInt(
    //   (await AsyncStorage.getItem('setting_version')) || '0',
    // );

    // if (settingVersion < SETTING_VERSION) {
    //   updateConditionNotification();
    //   AsyncStorage.setItem('setting_version', SETTING_VERSION.toString());
    // }

    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  };

  useEffect(() => {
    preLoad();

    // console.log(VersionCheck.getPackageName());
    // console.log(VersionCheck.getCurrentVersion());
    // console.log(VersionCheck.getCurrentBuildNumber());
    // VersionCheck.getLatestVersion({
    //   provider: 'appStore',
    // }).then((latestVersion: any) => {
    //   console.log(`[ios Latest Version] : ${latestVersion}`);
    // });
    // VersionCheck.getLatestVersion({
    //   provider: 'playStore',
    // }).then((latestVersion: any) => {
    //   console.log(`[playStore Latest Version] : ${latestVersion}`);
    // });

    // PushNotification.createChannel(
    //   {
    //     channelId: 'fcm_default_channel', // (required)
    //     channelName: 'Notification Channel', // (required)
    //   },
    //   (created: any) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    // );
  }, []);

  // useEffect(() => {
  //   const _handleAppStateChange = (nextAppState: string) => {
  //     if (nextAppState === 'active') {
  //       console.log('App has come to the foreground!');
  //       ShortcutBadge.setCount(0);
  //     }
  //   };

  //   AppState.addEventListener('change', _handleAppStateChange);

  //   return () => {
  //     AppState.removeEventListener('change', _handleAppStateChange);
  //   };
  // }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer ref={navigationRef}>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
