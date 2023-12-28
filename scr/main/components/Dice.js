import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect, useRef} from 'react';

const Dice = ({
  diseNumber,
  active,
  player,
  disePlayerHanlder,
  number,
  name,
  src,
}) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  const startAnimation = toValue => {
    Animated.timing(spinValue, {
      toValue,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      spinValue.setValue(0);
    });
  };

  useEffect(() => {
    startAnimation(1);
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '180deg', '360deg'],
  });
  return (
    <View>
      <View style={{}}>
        {number == 'p1' && (
          <View>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 21,
                color: '#000',
              }}>
              {name !== '' ? name : 'Player1'}
            </Text>
          </View>
        )}
        {number == 'p4' && (
          <View>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 21,
                color: '#000',
              }}>
              {name !== '' ? name : 'Player4'}
            </Text>
          </View>
        )}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 40,
              width: 40,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'lightblue',
              borderWidth: 2,
              borderRightWidth: 0,
              borderColor: '#ffdede',
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}>
            <Image
              style={{
                width: 25,
                resizeMode: 'contain',
                height: 25,
              }}
              source={src}
            />
          </View>
          <View
            style={{
              borderWidth: 2,
              height: 50,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'lightblue',
              borderRadius: 5,
              backgroundColor: '#ffdede',
              // borderLeftWidth: 0,
            }}>
            {player == number && (
              <TouchableWithoutFeedback
                onPress={() => {
                  if (active) {
                    disePlayerHanlder(player);
                    startAnimation(1);
                  }
                }}>
                <Animated.View style={{transform: [{rotate: spin}]}}>
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: active ? '#fff' : 'lightgray',
                      borderRadius: 5,
                      shadowColor: 'red',
                      elevation: 5,
                    }}>
                    {diseNumber == 1 && (
                      <View
                        style={{
                          flex: 1,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            width: 11,
                            height: 11,
                            backgroundColor: '#000',
                            borderRadius: 11 / 2,
                          }}></View>
                      </View>
                    )}
                    {diseNumber == 2 && (
                      <View
                        style={{
                          flex: 1,
                          position: 'relative',
                        }}>
                        <View
                          style={[
                            styles.dot,
                            {
                              position: 'absolute',
                              right: 6,
                              top: 6,
                            },
                          ]}></View>
                        <View
                          style={[
                            styles.dot,
                            {
                              position: 'absolute',
                              bottom: 6,
                              left: 6,
                            },
                          ]}></View>
                      </View>
                    )}
                    {diseNumber == 3 && (
                      <View
                        style={{
                          flex: 1,
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                        }}>
                        <View
                          style={[
                            styles.dot,
                            {
                              position: 'absolute',
                              right: 6,
                              top: 6,
                            },
                          ]}></View>
                        <View style={[styles.dot]}></View>
                        <View
                          style={[
                            styles.dot,
                            {
                              position: 'absolute',
                              bottom: 6,
                              left: 6,
                            },
                          ]}></View>
                      </View>
                    )}
                    {diseNumber == 4 && (
                      <View
                        style={{
                          flex: 1,
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                        }}>
                        <View
                          style={[
                            styles.dot,
                            {
                              position: 'absolute',
                              left: 6,
                              top: 6,
                            },
                          ]}></View>
                        <View
                          style={[
                            styles.dot,
                            {
                              position: 'absolute',
                              right: 6,
                              top: 6,
                            },
                          ]}></View>
                        <View
                          style={[
                            styles.dot,
                            {
                              position: 'absolute',
                              right: 6,
                              bottom: 6,
                            },
                          ]}></View>
                        <View
                          style={[
                            styles.dot,
                            {
                              position: 'absolute',
                              bottom: 6,
                              left: 6,
                            },
                          ]}></View>
                      </View>
                    )}
                    {diseNumber == 5 && (
                      <View
                        style={{
                          flex: 1,
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                        }}>
                        <View
                          style={[
                            styles.dot,
                            {
                              position: 'absolute',
                              left: 6,
                              top: 6,
                            },
                          ]}></View>
                        <View
                          style={[
                            styles.dot,
                            {
                              position: 'absolute',
                              right: 6,
                              top: 6,
                            },
                          ]}></View>
                        <View style={[styles.dot]}></View>
                        <View
                          style={[
                            styles.dot,
                            {
                              position: 'absolute',
                              right: 6,
                              bottom: 6,
                            },
                          ]}></View>
                        <View
                          style={[
                            styles.dot,
                            {
                              position: 'absolute',
                              bottom: 6,
                              left: 6,
                            },
                          ]}></View>
                      </View>
                    )}
                    {diseNumber == 6 && (
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          position: 'relative',
                          padding: 6,
                        }}>
                        <View
                          style={{
                            justifyContent: 'space-between',
                          }}>
                          <View style={[styles.dot]}></View>
                          <View style={[styles.dot]}></View>
                          <View style={[styles.dot]}></View>
                        </View>
                        <View
                          style={{
                            justifyContent: 'space-between',
                          }}>
                          <View style={[styles.dot]}></View>
                          <View style={[styles.dot]}></View>
                          <View style={[styles.dot]}></View>
                        </View>
                      </View>
                    )}
                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>
            )}
          </View>
        </View>
        {number == 'p2' && (
          <View>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 21,
                color: '#000',
              }}>
              {name !== '' ? name : 'Player2'}
            </Text>
          </View>
        )}
        {number == 'p3' && (
          <View>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 21,
                color: '#000',
              }}>
              {name !== '' ? name : 'Player3'}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Dice;

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#000',
    borderRadius: 8 / 2,
  },
});
