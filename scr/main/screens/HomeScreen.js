import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
// const Line = ({x1, y1, x2, y2}) => {
//   console.log(x1, y1, x2, y2);
//   const x1Pixel = (x1 / 100) * screenWidth;
//   const x2Pixel = (x2 / 100) * screenWidth;

//   console.log('x1Pixel------>', x1Pixel, x2Pixel);

//   // Calculate the distance and angle between two points
//   const distance = Math.sqrt((x2Pixel - x1Pixel) ** 2 + (y2 - y1) ** 2);
//   let angle = x2 - x1;
//   // if (x1 > x2) {
//   //   angle = x2 - x1;
//   // } else {

//   // }
//   console.log('distance-------->', distance, angle);
//   return (
//     <View
//       style={{
// position: 'relative',
// width: '100%',
// height: 500,
// backgroundColor: '#fff',
//       }}>
//       <View
//         style={{
//           position: 'absolute',
//           left: `${x1}%`,
//           top: y1,
//           width: 10,
//           height: distance,
//           backgroundColor: 'black',
//           transform: [
//             {translateX: -5},
//             {translateY: -distance / 2},
//             {rotate: `${180 + angle}deg`},
//             {translateX: 5},
//             {translateY: distance / 2},
//           ],
//         }}
//       />
//     </View>
//   );
// };

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
          }}>
          <View
            style={{
              position: 'absolute',
              left: 100,
              top: 50,
              width: 15,
              zIndex: 1,
              height: 250,
              paddingTop: 10,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 50,
                height: 100,
                overflow: 'hidden',
              }}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  resizeMode: 'center'
                }}
                source={require('../../../assets/images/snakeface.png')}
                alt="snakeface"
              />
              {Array.from({
                length: 3,
              }).map((_, index) => (
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
                      width: 50,
                      height: 50,
                      borderTopWidth: 12,
                      borderRightWidth: 12,
                      borderColor: 'red',
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
                      width: 50,
                      height: 50,
                      borderBottomWidth: 12,
                      borderLeftWidth: 12,
                      borderColor: 'red',
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
            </View>
            <View
              style={{
                width: 15,
                height: 70,
                borderBottomLeftRadius: 20,

                backgroundColor: 'blue',
              }}></View>
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

export default HomeScreen;
