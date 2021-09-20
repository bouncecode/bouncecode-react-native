import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Test from '../components/Test';

function DetailsScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Test />
      </View>
    </SafeAreaView>
  );
}

export default DetailsScreen;
