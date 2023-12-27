import {
  View,
  Text,
  Easing,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  Button,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Sound from 'react-native-sound';

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
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 50,
  },
});
