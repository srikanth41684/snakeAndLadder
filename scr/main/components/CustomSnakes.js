import {View, Text, SafeAreaView, Dimensions, Image} from 'react-native';
import React from 'react';

const screenWidth = Dimensions.get('window').width;

const CustomSnakes = ({x1, y1, x2, y2, color, show}) => {
  const x1Pixel = (x1 / 100) * screenWidth;
  const x2Pixel = (x2 / 100) * screenWidth;

  const distance = Math.sqrt((x2Pixel - x1Pixel) ** 2 + (y2 - y1) ** 2);
  const angle = Math.atan2(x2Pixel - x1Pixel, y2 - y1) * (180 / Math.PI);
  console.log('distance / 100--->', distance);
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
            position: 'absolute',
            left: `${x1 - 5}%`,
            top: y1 - 20,
            zIndex: 10,
            transform: [{rotate: '-45deg'}],
          }}>
          <Image
            style={{
              width: 33,
              height: 33,
              resizeMode: 'center',
            }}
            source={require('../../../assets/images/snakeface.png')}
            alt="snakeface"
          />
        </View>
        <View
          style={{
            position: 'absolute',
            left: `${x1 - 3}%`,
            top: y1 - 5,
            width: 50,
            borderColor: 'red',
            zIndex: show + 5,
            height: distance,
            // backgroundColor: 'green',
            transform: [
              {translateX: -5},
              {translateY: -distance / 2},
              {rotate: `${-angle}deg`},
              {translateX: 5},
              {translateY: distance / 2},
            ],
          }}>
          <View
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
            {/* <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 25 / 2,
                position: 'absolute',
                top: -10,
                backgroundColor: 'green',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: 3,
              }}>
              <View
                style={{
                  paddingTop: 4,
                  paddingHorizontal: 2,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 8 / 2,
                    backgroundColor: '#000',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: 4 / 2,
                      backgroundColor: '#fff',
                    }}></View>
                </View>
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 8 / 2,
                    backgroundColor: '#000',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: 4 / 2,
                      backgroundColor: '#fff',
                    }}></View>
                </View>
              </View>
              <View
                style={{
                  width: 15,
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: 'red',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <View
                  style={{
                    width: 2,
                    height: 10,
                    backgroundColor: '#000',
                  }}></View>
                <View
                  style={{
                    width: 2,
                    height: 10,
                    backgroundColor: '#000',
                  }}></View>
              </View>
            </View>
            {Array.from({length: Math.floor(distance / 50)}).map((_, index) => (
              <View
                key={index}
                style={{
                  height: 30,
                  width: 10,
                  borderRadius: 20,
                  backgroundColor: 'coral',
                  marginTop: 20,
                }}
              />
            ))} */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomSnakes;
