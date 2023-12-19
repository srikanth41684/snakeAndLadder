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
              width: 60,
              height: 60,
              backgroundColor: 'green',
              borderRadius: 8,
            }}>
            {/* <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: '#000',
                  borderRadius: 15 / 2,
                }}></View>
            </View> */}
            {/* <View
              style={{
                flex: 1,
                position: 'relative',
              }}>
              <View
                style={[
                  styles.dot,
                  {
                    position: 'absolute',
                    right: 5,
                    top: 5,
                  },
                ]}></View>
              <View
                style={[
                  styles.dot,
                  {
                    position: 'absolute',
                    bottom: 5,
                    left: 5,
                  },
                ]}></View>
            </View> */}
            {/* <View
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
                    right: 5,
                    top: 5,
                  },
                ]}></View>
              <View style={[styles.dot]}></View>
              <View
                style={[
                  styles.dot,
                  {
                    position: 'absolute',
                    bottom: 5,
                    left: 5,
                  },
                ]}></View>
            </View> */}
            {/* <View
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
                    left: 5,
                    top: 5,
                  },
                ]}></View>
              <View
                style={[
                  styles.dot,
                  {
                    position: 'absolute',
                    right: 5,
                    top: 5,
                  },
                ]}></View>
              <View
                style={[
                  styles.dot,
                  {
                    position: 'absolute',
                    right: 5,
                    bottom: 5,
                  },
                ]}></View>
              <View
                style={[
                  styles.dot,
                  {
                    position: 'absolute',
                    bottom: 5,
                    left: 5,
                  },
                ]}></View>
            </View> */}
            {/* <View
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
                    left: 5,
                    top: 5,
                  },
                ]}></View>
              <View
                style={[
                  styles.dot,
                  {
                    position: 'absolute',
                    right: 5,
                    top: 5,
                  },
                ]}></View>
              <View style={[styles.dot]}></View>
              <View
                style={[
                  styles.dot,
                  {
                    position: 'absolute',
                    right: 5,
                    bottom: 5,
                  },
                ]}></View>
              <View
                style={[
                  styles.dot,
                  {
                    position: 'absolute',
                    bottom: 5,
                    left: 5,
                  },
                ]}></View>
            </View> */}
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
                position: 'relative',
                padding: 5,
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

const styles = StyleSheet.create({
  dot: {
    width: 15,
    height: 15,
    backgroundColor: '#000',
    borderRadius: 15 / 2,
  },
});
