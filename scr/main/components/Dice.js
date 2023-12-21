import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

const Dice = ({diseNumber, active, player, disePlayerHanlder, number, src}) => {
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
              Player1
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
              height: 50,
              width: 50,
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
                width: 35,
                resizeMode: 'contain',
                height: 35,
              }}
              source={src}
            />
          </View>
          <View
            style={{
              borderWidth: 2,
              height: 60,
              width: 60,
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
                  }
                }}>
                <View style={{}}>
                  <View
                    style={{
                      width: 45,
                      height: 45,
                      backgroundColor: active ? '#fff' : 'lightgray',
                      borderRadius: 8,
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
                </View>
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
              Player2
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
    width: 9,
    height: 9,
    backgroundColor: '#000',
    borderRadius: 9 / 2,
  },
});
