import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
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
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 23,
              color: '#000',
            }}>
            HomeScreen
          </Text>
        </View>

        <View
          style={{
            position: 'relative',
            width: '100%',
            height: 500,
            backgroundColor: '#fff',
            paddingTop: 50,
            paddingLeft: 20,
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
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
                  Play Game
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => {
                CustomNavigation.navigate('cube');
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
                  Cube
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
