import React from 'react';
import {View, SafeAreaView} from 'react-native';

const Cube = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            width: 50,
            height: 100,
            position: 'relative',
          }}></View>
      </View>
    </SafeAreaView>
  );
};

export default Cube;
