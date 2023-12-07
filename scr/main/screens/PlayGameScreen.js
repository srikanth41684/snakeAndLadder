import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';

const PlayGameScreen = () => {
  const [commObj, setCommObj] = useState({
    NumbersArray: [],
  });

  function generateRange(start, end) {
    return Array.from({length: end - start + 1}, (_, index) => start + index);
  }

  useEffect(() => {
    for (let i = 1; i <= 10; i++) {
      commObj.NumbersArray.push(generateRange((i - 1) * 10 + 1, i * 10));
    }
  }, []);

  useEffect(() => {
    console.log('PlayGameScreen-commObj------>', commObj);
  }, [commObj]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <Text>PlayGameScreen</Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {commObj.NumbersArray.length > 0 &&
            commObj.NumbersArray.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: '10%',
                    height: 50,
                    borderWidth: 0.5,
                  }}>
                  <View
                    style={{
                      alignItems: 'flex-end',
                    }}>
                    <Text>{item}</Text>
                  </View>
                </View>
              );
            })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlayGameScreen;
