import React from 'react';
import {Text} from 'react-native';
import {IView} from '../../interfaces';
import useTestQuery from '../../hooks/useTestQuery';

const DefaultView: IView = () => {
  const {loading, error, data} = useTestQuery();

  console.log(loading || error || data);

  return (
    <Text>서버 통신 상태: {loading ? '로딩중' : error ? '오류' : '정상'}</Text>
  );
};

export default DefaultView;
