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
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const CustomNavigation = useNavigation();

  const position = useRef(new Animated.Value(0)).current;

  const moveLeftToRight = () => {
    Animated.timing(position, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      position.setValue(0);
      moveLeftToRight();
    });
  };

  useEffect(() => {
    moveLeftToRight();
  }, []);

  const interpolatedX = position.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });
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
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 0,
                height: 0,
                backgroundColor: 'transparent',
                borderStyle: 'solid',
                borderTopWidth: 25,
                borderRightWidth: 35,
                borderBottomWidth: 25,
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
                  borderTopWidth: 25,
                  borderRightWidth: 35,
                  borderBottomWidth: 25,
                  borderTopColor: 'transparent',
                  borderRightColor: 'transparent',
                  borderBottomColor: 'transparent',
                }}
              />
            </View>
            <View
              style={{
                width: 10,
                height: 40,
                borderWidth: 1,
                borderColor: 'red',
                backgroundColor: 'red',
              }}></View>
          </View>
          <View>
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
                  borderTopWidth: 25,
                  borderRightWidth: 35,
                  borderBottomWidth: 25,
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
                    borderTopWidth: 25,
                    borderRightWidth: 35,
                    borderBottomWidth: 25,
                    borderTopColor: 'transparent',
                    borderRightColor: 'transparent',
                    borderBottomColor: 'transparent',
                  }}
                />
              </View>
              <View
                style={{
                  width: 10,
                  height: 40,
                  borderWidth: 1,
                  borderColor: 'red',
                  backgroundColor: 'red',
                }}></View>
            </Animated.View>

            <TouchableOpacity onPress={moveLeftToRight}>
              <View
                style={{marginTop: 20, padding: 10, backgroundColor: 'green'}}>
                <Text style={{color: 'white'}}>Move View</Text>
              </View>
            </TouchableOpacity>
          </View>
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

const styles = {
  triangleContainer: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 25,
    borderRightWidth: 35,
    borderBottomWidth: 25,
    borderTopColor: 'transparent',
    borderRightColor: 'red',
    borderBottomColor: 'transparent', // Change this color to the desired triangle color
  },
  triangle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 25,
    borderRightWidth: 35,
    borderBottomWidth: 25,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  },
};

export default HomeScreen;
