import React from 'react';
import {Text} from 'react-native';
import {IView} from '../../interfaces';
import useMeQuery from '../../hooks/useMeQuery';

const DefaultView: IView = () => {
  const {data} = useMeQuery();

  return <Text>{JSON.stringify(data)}</Text>;
};

export default DefaultView;
