import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';

const screenWidth = Dimensions.get('window').width;

const CustomLadder = ({x1, y1, x2, y2}) => {
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
            width: 25,
            borderColor: 'blue',
            borderLeftWidth: 4,
            borderRightWidth: 4,
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
            }}>
            {Array.from({length: Math.floor(distance / 26)}).map((_, index) => (
              <View
                key={index}
                style={{
                  height: 25,
                  borderBottomWidth: 2,
                  // paddingBottom: 10,
                  borderBottomColor: 'blue',
                }}
              />
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomLadder;
