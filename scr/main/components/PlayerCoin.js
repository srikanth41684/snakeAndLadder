import {View, SafeAreaView, Animated, Easing} from 'react-native';
import React, {useEffect, useRef} from 'react';

const PlayerCoin = () => {
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
        }}>
        <Animated.View
          style={[
            {
              width: 30,
              height: 30,
              borderWidth: 4,
              borderColor: '#000',
              borderStyle: 'dotted',
              borderRadius: 30 / 2,
            },
            animatedStyle,
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

export default PlayerCoin;
