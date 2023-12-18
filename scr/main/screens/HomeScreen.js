import {View, Text, TouchableWithoutFeedback, SafeAreaView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const CustomNavigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          backgroundColor: '#fff',
        }}>
        <Text>HomeScreen</Text>
        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              CustomNavigation.navigate('play');
            }}>
            <View
              style={{
                padding: 20,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#000',
                }}>
                Play
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
