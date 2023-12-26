import {View, Animated, Easing} from 'react-native';
import React, {useEffect, useRef} from 'react';

const UserIndicator = () => {
  const position = useRef(new Animated.Value(0)).current;

  const moveLeftToRight = () => {
    Animated.timing(position, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      position.setValue(0); // Reset position after the animation completes
      moveLeftToRight(); // Start the animation again in a loop
    });
  };

  useEffect(() => {
    moveLeftToRight(); // Start the initial animation
  }, []);

  const interpolatedX = position.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20], // Adjust the distance as needed
  });
  return (
    <Animated.View
      style={{
        transform: [{translateX: interpolatedX}],
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 0,
          height: 0,
          backgroundColor: 'transparent',
          borderStyle: 'solid',
          borderTopWidth: 20,
          borderRightWidth: 25,
          borderBottomWidth: 20,
          borderTopColor: 'transparent',
          borderRightColor: 'red',
          borderBottomColor: 'transparent',
        }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            borderTopWidth: 20,
            borderRightWidth: 25,
            borderBottomWidth: 20,
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
          }}
        />
      </View>
      <View
        style={{
          width: 10,
          height: 25,
          borderWidth: 1,
          borderColor: 'red',
          backgroundColor: 'red',
        }}></View>
    </Animated.View>
  );
};

export default UserIndicator;
