import {View, Text, SafeAreaView, Dimensions, Image} from 'react-native';
import React from 'react';

const screenWidth = Dimensions.get('window').width;

const CustomSnakes = ({x1, y1, x2, y2}) => {
  const x1Pixel = (x1 / 100) * screenWidth;
  const x2Pixel = (x2 / 100) * screenWidth;

  const distance = Math.sqrt((x2Pixel - x1Pixel) ** 2 + (y2 - y1) ** 2);
  const angle = Math.atan2(x2Pixel - x1Pixel, y2 - y1) * (180 / Math.PI);
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
            left: `${x1}%`,
            top: y1,
            width: 15,
            borderColor: 'red',
            zIndex: 1,
            height: distance,
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
              width: '100%',
              backgroundColor: 'green',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              position: 'relative',
            }}>
            <View
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
                  justifyContent: 'space-evenly'
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
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomSnakes;
