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
              // alignItems: 'center',
              // justifyContent: 'center',
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
            <View>
              <View
                style={{
                  position: 'relative',
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
                    width: 25,
                    position: 'relative',
                    top: 30,
                  }}>
                  <View
                    style={{
                      width: 20,
                      height: 40,
                      borderLeftWidth: index % 2 === 0 ? 10 : 0,
                      position: 'relative',
                      borderBottomLeftRadius: 50,
                      borderTopLeftRadius: 50,
                      borderRightWidth: index % 2 !== 0 ? 10 : 0,
                      borderTopRightRadius: 50,
                      borderBottomRightRadius: 50,
                      borderColor: 'green',
                    }}>
                    {index > 0 && (
                      <View
                        style={{
                          width: 10,
                          height: 25,
                          borderRadius: 10,
                          backgroundColor: 'green',
                          position: 'absolute',
                          top: index % 2 !== 0 ? -12 : -10,
                          left: index % 2 !== 0 ? 5 : -5,
                          transform: [
                            {rotate: index % 2 !== 0 ? '-35deg' : '30deg'},
                          ],
                        }}></View>
                    )}
                  </View>

                  {/* <View
                    style={{
                      width: 20,
                      height: 50,
                      borderRightWidth: 10,
                      borderTopRightRadius: 25,
                      borderBottomRightRadius: 25,
                      alignSelf: 'flex-end',
                      position: 'relative',
                      bottom: 5,
                    }}></View> */}
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
