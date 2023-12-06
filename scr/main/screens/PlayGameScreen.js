import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

const PlayGameScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <Text>PlayGameScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default PlayGameScreen;
