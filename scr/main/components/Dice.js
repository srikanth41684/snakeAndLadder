import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const Dice = ({diseNumber, active}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 60,
            height: 60,
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
                  width: 15,
                  height: 15,
                  backgroundColor: '#000',
                  borderRadius: 15 / 2,
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
            </View>
          )}
          {diseNumber == 6 && (
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
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dice;

const styles = StyleSheet.create({
  dot: {
    width: 15,
    height: 15,
    backgroundColor: '#000',
    borderRadius: 15 / 2,
  },
});
