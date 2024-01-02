import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';

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
            {/* <View
              style={{
                // alignItems: 'center',
              }}>
              <View
                style={{
                  position: 'relative',
                  top: -40,
                  // left: 5,
                }}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'center',
                    position: 'absolute',
                    zIndex: 5,
                  }}
                  source={require('../../../assets/images/snakeface.png')}
                  alt="snakeface"
                />
                <View
                  style={{
                    width: 10,
                    height: 25,
                    backgroundColor: 'green',
                    position: 'absolute',
                    left: 7,
                    top: 10,
                    borderBottomRightRadius: 10,
                  }}></View>
              </View>
              {Array.from({length: 10}).map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: 50,
                    height: 100,
                    position: 'relative',
                    bottom: index > 0 ? index * 22 : 0,
                  }}>
                  <View
                    style={{
                      position: 'absolute',
                      left: 8,
                      top: -10,
                      width: 8,
                      height: 8,
                      borderRadius: 10,
                      backgroundColor: '#fff',
                    }}></View>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderTopWidth: 12,
                      borderRightWidth: 12,
                      borderColor: 'green',
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 20,
                      borderRadius: 20,
                      transform: [{rotate: '45deg'}],
                      position: 'relative',
                      right: 7,
                      top: 5,
                    }}></View>
                  <View
                    style={{
                      position: 'absolute',
                      left: 34,
                      top: 30,
                      width: 8,
                      height: 8,
                      borderRadius: 10,
                      backgroundColor: 'orange',
                    }}></View>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderBottomWidth: 12,
                      borderLeftWidth: 12,
                      borderColor: 'green',
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderRadius: 20,
                      transform: [{rotate: '45deg'}],
                      position: 'relative',
                      left: 7,
                      bottom: 5,
                    }}></View>
                </View>
              ))}
            </View> */}
            {/* <View
              style={{
                height: 280,
                width: 40,
                alignItems: 'center',
              }}>
              {Array.from({length: 5}).map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: 30,
                    height: 100,
                    position: 'relative',
                    bottom: index > 0 ? index * 26 : 0,
                    alignItems: 'center',
                    zIndex: 9999,
                  }}>
                  <View
                    style={{
                      position: 'absolute',
                      left: -4,
                      top: -20,
                      width: 8,
                      height: 8,
                      borderRadius: 10,
                      backgroundColor: '#fff',
                    }}></View>
                  <View
                    style={{
                      width: 40,
                      height: 50,
                      borderTopWidth: 10,
                      borderRightWidth: 10,
                      borderColor: 'green',
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 20,
                      borderRadius: 20,
                      transform: [{rotate: '45deg'}],
                      position: 'relative',
                      right: 7,
                      top: 0,
                    }}></View>
                  <View
                    style={{
                      position: 'absolute',
                      left: 23,
                      top: 17,
                      width: 8,
                      height: 8,
                      borderRadius: 10,
                      backgroundColor: 'orange',
                      zIndex: 10,
                    }}></View>
                  <View
                    style={{
                      width: 40,
                      height: 50,
                      borderBottomWidth: 10,
                      borderLeftWidth: 10,
                      borderColor: 'green',
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderRadius: 20,
                      transform: [{rotate: '45deg'}],
                      position: 'relative',
                      left: 3,
                      bottom: 20,
                    }}></View>
                </View>
              ))}
            </View> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
