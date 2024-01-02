import {View, Text, SafeAreaView, Dimensions, Image} from 'react-native';
import React from 'react';

const screenWidth = Dimensions.get('window').width;

const CustomSnakes = ({x1, y1, x2, y2, color, show}) => {
  const x1Pixel = (x1 / 100) * screenWidth;
  const x2Pixel = (x2 / 100) * screenWidth;

  const distance = Math.sqrt((x2Pixel - x1Pixel) ** 2 + (y2 - y1) ** 2);
  const angle = Math.atan2(x2Pixel - x1Pixel, y2 - y1) * (180 / Math.PI);
  console.log('distance / 100--->', distance, angle);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            alignItems: 'center',
            left:
              angle > 0
                ? `${x1 - 5}%`
                : angle == 0
                ? `${x1 - 3}%`
                : `${x1 - 3}%`,
            top: y1 - 8,
            width: 40,
            zIndex: show + 2,
            height:
              angle < 0
                ? distance + 15
                : angle == 0
                ? distance + 20
                : distance + 15,
            // height: distance,
            overflow: 'hidden',
            transform: [
              {translateX: -5},
              {translateY: -distance / 2},
              {
                rotate:
                  angle > 20 && angle < 35
                    ? `${-angle + 5}deg`
                    : `${-angle}deg`,
              },
              {translateX: 5},
              {translateY: distance / 2},
            ],
          }}>
          <View style={{}}>
            <View
              style={{
                position: 'relative',
                zIndex: 12,
              }}>
              <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'center',
                  position: 'absolute',
                  zIndex: 12,
                  // top: 0,
                }}
                source={require('../../../assets/images/snakeface.png')}
                alt="snakeface"
              />
            </View>
            {Array.from({length: 5}).map((_, index) => (
              <View
                key={index}
                style={{
                  width: 30,
                  height: 100,
                  position: 'relative',
                  // top: index > 0 ? 0 : 10,
                  bottom: index > 0 ? index * 38 : 0,
                  alignItems: 'center',
                  zIndex: 10,
                  marginTop: 12,
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
                    borderColor: color,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 20,
                    // borderRadius: 20,
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
                    borderColor: color,
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
            {/* {Array.from({length: 10}).map((_, index) => (
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
                    borderColor: color,
                  }}>
                  {index > 0 && (
                    <View
                      style={{
                        width: 10,
                        height: 25,
                        borderRadius: 10,
                        backgroundColor: color,
                        position: 'absolute',
                        top: index % 2 !== 0 ? -12 : -10,
                        left: index % 2 !== 0 ? 5 : -5,
                        alignItems: 'center',
                        transform: [
                          {rotate: index % 2 !== 0 ? '-35deg' : '30deg'},
                        ],
                      }}>
                      <View
                        style={{
                          width: 7,
                          height: 14,
                          borderRadius: 7 / 2,
                          backgroundColor: '#fff',
                        }}></View>
                    </View>
                  )}
                </View>
              </View>
            ))} */}
          </View>
          {/* <View
            style={{
              height: '100%',
              alignItems: 'center',
              width: 50,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              position: 'relative',
              overflow: 'hidden',
            }}>
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
                    borderColor: color,
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
                    borderColor: color,
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomSnakes;
