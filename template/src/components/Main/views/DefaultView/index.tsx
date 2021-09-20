import React from 'react';
import {Text} from 'react-native';
import {observer} from 'mobx-react-lite';
import AuthNavigator from '../../../../navigators/AuthNavigator';
import TabNavigator from '../../../../navigators/TabNavigator';
import useLoggedInEffect from '../../hooks/useLoggedInEffect';
import {IView} from '../../interfaces';

const DefaultView: IView = ({screenState}) => {
  useLoggedInEffect(me => {
    if (me) {
      screenState.setTabNavigator();
    } else {
      screenState.setAuthNavigator();
    }
  });

  if (screenState.value == screenState.options.AUTH_NAVIGATOR) {
    return <AuthNavigator />;
  } else if (screenState.value === screenState.options.TAB_NAVIGATOR) {
    return <TabNavigator />;
  } else {
    return <Text>Loading...</Text>;
  }
};

export default observer(DefaultView);
