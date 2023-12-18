import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const Line = ({x1, y1, x2, y2}) => {
  console.log(x1, y1, x2, y2);
  const x1Pixel = (x1 / 100) * screenWidth;
  const x2Pixel = (x2 / 100) * screenWidth;

  console.log('x1Pixel------>', x1Pixel, x2Pixel);

  // Calculate the distance and angle between two points
  const distance = Math.sqrt((x2Pixel - x1Pixel) ** 2 + (y2 - y1) ** 2);
  let angle = x2 - x1;
  // if (x1 > x2) {
  //   angle = x2 - x1;
  // } else {

  // }
  console.log('distance-------->', distance, angle);
  return (
    <View
      style={{
        position: 'relative',
        width: '100%',
        height: 500,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          position: 'absolute',
          left: `${x1}%`,
          top: y1,
          width: 10,
          height: distance,
          backgroundColor: 'black',
          transform: [
            {translateX: -5},
            {translateY: -distance / 2},
            {rotate: `${180 + angle}deg`},
            {translateX: 5},
            {translateY: distance / 2},
          ],
        }}
      />
    </View>
  );
};

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

        <Line x1={5} y1={425} x2={15} y2={275} />

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

export default HomeScreen;
