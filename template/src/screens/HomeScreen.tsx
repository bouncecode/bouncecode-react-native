import React from 'react';

import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details');
        }}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>터치하여 상세페이지로 아동하세요.</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
