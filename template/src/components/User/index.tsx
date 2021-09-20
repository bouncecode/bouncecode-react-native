import React from 'react';
import {IComponent} from './interfaces';
import DefaultProfileView from './views/DefaultProfileView';

const User: IComponent = ({View = DefaultProfileView}) => {
  return <View />;
};

export default User;
