import React from 'react';
import {IComponent} from './interfaces';
import screenState from './states/screenState';
import DefaultView from './views/DefaultView';

const Main: IComponent = ({View = DefaultView}) => {
  return <View screenState={screenState} />;
};

export default Main;
