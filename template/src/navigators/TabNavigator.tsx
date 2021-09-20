import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthNavigator from './AuthNavigator';
import DetailsScreen from '../screens/DetailsScreen';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={AuthNavigator} />
      <Tab.Screen name="Settings" component={DetailsScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
