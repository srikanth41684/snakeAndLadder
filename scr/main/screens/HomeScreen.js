import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  Dimensions,
  Image,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const CustomNavigation = useNavigation();

  const rotationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotateAnimation = Animated.loop(
      Animated.timing(rotationValue, {
        toValue: 1,
        duration: 2000, // Adjust the duration as needed
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    rotateAnimation.start();

    return () => {
      rotateAnimation.stop();
    };
  }, [rotationValue]);

  const rotateInterpolate = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{rotate: rotateInterpolate}],
  };
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
          <Animated.View
            style={[
              {
                width: 30,
                height: 30,
                borderWidth: 4,
                borderColor: '#000',
                // borderLeftColor: 'blue',
                // borderRightColor: 'red',
                // borderTopColor: 'yellowgreen',
                // borderBottomColor: 'green',
                borderStyle: 'dotted',
                borderRadius: 30 / 2,
              },
              animatedStyle,
            ]}
          />
        </View>

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
