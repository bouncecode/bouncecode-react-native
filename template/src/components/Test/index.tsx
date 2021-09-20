import React from 'react';
import {IComponent} from './interfaces';
import DefaultView from './views/DefaultView';

const Test: IComponent = ({View = DefaultView}) => {
  return <View />;
};

export default Test;
