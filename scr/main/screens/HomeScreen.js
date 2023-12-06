import {View, Text, TouchableWithoutFeedback, Modal, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';

const NumbersArray = [
  {id: 100, number: 100},
  {id: 99, number: 99},
  {id: 98, number: 98},
  {id: 97, number: 97},
  {id: 96, number: 96},
  {id: 95, number: 95},
  {id: 94, number: 94},
  {id: 93, number: 93},
  {id: 92, number: 92},
  {id: 91, number: 91},

  {id: 81, number: 81},
  {id: 82, number: 82},
  {id: 83, number: 83},
  {id: 84, number: 84},
  {id: 85, number: 85},
  {id: 86, number: 86},
  {id: 87, number: 87},
  {id: 88, number: 88},
  {id: 89, number: 89},
  {id: 90, number: 90},

  {id: 80, number: 80},
  {id: 79, number: 79},
  {id: 78, number: 78},
  {id: 77, number: 77},
  {id: 76, number: 76},
  {id: 75, number: 75},
  {id: 74, number: 74},
  {id: 73, number: 73},
  {id: 72, number: 72},
  {id: 71, number: 71},

  {id: 61, number: 61},
  {id: 62, number: 62},
  {id: 63, number: 63},
  {id: 64, number: 64},
  {id: 65, number: 65},
  {id: 66, number: 66},
  {id: 67, number: 67},
  {id: 68, number: 68},
  {id: 69, number: 69},
  {id: 70, number: 70},

  {id: 60, number: 60},
  {id: 59, number: 59},
  {id: 58, number: 58},
  {id: 57, number: 57},
  {id: 56, number: 56},
  {id: 55, number: 55},
  {id: 54, number: 54},
  {id: 53, number: 53},
  {id: 52, number: 52},
  {id: 51, number: 51},

  {id: 41, number: 41},
  {id: 42, number: 42},
  {id: 43, number: 43},
  {id: 44, number: 44},
  {id: 45, number: 45},
  {id: 46, number: 46},
  {id: 47, number: 47},
  {id: 48, number: 48},
  {id: 49, number: 49},
  {id: 50, number: 50},

  {id: 40, number: 40},
  {id: 39, number: 39},
  {id: 38, number: 38},
  {id: 37, number: 37},
  {id: 36, number: 36},
  {id: 35, number: 35},
  {id: 34, number: 34},
  {id: 33, number: 33},
  {id: 32, number: 32},
  {id: 31, number: 31},

  {id: 21, number: 21},
  {id: 22, number: 22},
  {id: 23, number: 23},
  {id: 24, number: 24},
  {id: 25, number: 25},
  {id: 26, number: 26},
  {id: 27, number: 27},
  {id: 28, number: 28},
  {id: 29, number: 29},
  {id: 30, number: 30},

  {id: 20, number: 20},
  {id: 19, number: 19},
  {id: 18, number: 18},
  {id: 17, number: 17},
  {id: 16, number: 16},
  {id: 15, number: 15},
  {id: 14, number: 14},
  {id: 13, number: 13},
  {id: 12, number: 12},
  {id: 11, number: 11},

  {id: 1, number: 1},
  {id: 2, number: 2},
  {id: 3, number: 3},
  {id: 4, number: 4},
  {id: 5, number: 5},
  {id: 6, number: 6},
  {id: 7, number: 7},
  {id: 8, number: 8},
  {id: 9, number: 9},
  {id: 10, number: 10},
];

const HomeScreen = () => {
  const [commObj, setCommObj] = useState({
    diseNumber: 1,
    player1: true,
    player1In: false,
    player2: false,
    player2In: false,
    player1Count: 0,
    player2Count: 0,
  });

  function disePlayer1Hanlder() {
    let arr = [1, 2, 3, 4, 5, 6];
    let randomNum = arr[Math.floor(Math.random() * arr.length)];

    setCommObj(prev => ({
      ...prev,
      diseNumber: randomNum,
      player2: true,
      player1: false,
    }));
    if (randomNum == 1 && commObj.player1In == false) {
      setCommObj(prev => ({
        ...prev,
        player1In: true,
        player1Count: prev.player1Count + randomNum,
      }));
    }

    if (commObj.player1In == true && commObj.player1Count + randomNum <= 100) {
      setCommObj(prev => ({
        ...prev,
        player1Count: commObj.player1Count + 5,
      }));
    }
  }

  function disePlayer2Hanlder() {
    let arr = [1, 2, 3, 4, 5, 6];
    let randomNum = arr[Math.floor(Math.random() * arr.length)];
    setCommObj(prev => ({
      ...prev,
      diseNumber: randomNum,
      player1: true,
      player2: false,
    }));
    if (randomNum == 1 && commObj.player2In == false) {
      setCommObj(prev => ({
        ...prev,
        player2In: true,
        player2Count: prev.player2Count + randomNum,
      }));
    }
    if (commObj.player2In == true && commObj.player2Count + randomNum <= 100) {
      setCommObj(prev => ({
        ...prev,
        player2Count: prev.player2Count + randomNum,
      }));
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (commObj.player1Count == 6) {
        setCommObj(prev => ({
          ...prev,
          player1Count: 46,
        }));
      }
      if (commObj.player1Count == 3) {
        setCommObj(prev => ({
          ...prev,
          player1Count: 58,
        }));
      }
      if (commObj.player2Count == 6) {
        setCommObj(prev => ({
          ...prev,
          player2Count: 46,
        }));
      }
      if (commObj.player2Count == 3) {
        setCommObj(prev => ({
          ...prev,
          player2Count: 58,
        }));
      }
      if (commObj.player1Count == 22) {
        setCommObj(prev => ({
          ...prev,
          player1Count: 2,
        }));
      }
      if (commObj.player1Count == 32) {
        setCommObj(prev => ({
          ...prev,
          player1Count: 9,
        }));
      }
      if (commObj.player1Count == 36) {
        setCommObj(prev => ({
          ...prev,
          player1Count: 5,
        }));
      }
      if (commObj.player2Count == 22) {
        setCommObj(prev => ({
          ...prev,
          player2Count: 2,
        }));
      }
      if (commObj.player2Count == 32) {
        setCommObj(prev => ({
          ...prev,
          player2Count: 9,
        }));
      }
      if (commObj.player2Count == 36) {
        setCommObj(prev => ({
          ...prev,
          player2Count: 5,
        }));
      }
    }, 100);
  }, [commObj.player1Count, commObj.player2Count]);

  useEffect(() => {
    console.log('commObj------>', commObj);
  }, [commObj]);

  // if (commObj.player1Count == 100 || commObj.player2Count == 100) {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         backgroundColor: 'rgba(0,0,0,0.7)',
  //       }}>
  //       <Text>Test</Text>
  //     </View>
  //   );
  // }
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingHorizontal: 15,
        }}>
        <Text>Play</Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {NumbersArray.map((item, index) => {
            return (
              <View
                key={item.id}
                style={{
                  width: '10%',
                  height: 50,
                  borderWidth: 0.5,
                }}>
                <View
                  style={{
                    alignItems: 'flex-end',
                  }}>
                  <Text>{item.number}</Text>
                </View>
                {item.number == 22 && (
                  <View
                    style={{
                      width: 15,
                      height: 100,
                      backgroundColor: 'coral',
                      borderRadius: 20 / 2,
                      marginLeft: 5,
                    }}></View>
                )}
                {item.number == 36 && (
                  <View
                    style={{
                      width: 15,
                      height: 150,
                      backgroundColor: 'coral',
                      borderRadius: 20 / 2,
                      marginLeft: 5,
                    }}></View>
                )}
                {item.number == 32 && (
                  <View
                    style={{
                      width: 15,
                      height: 150,
                      backgroundColor: 'coral',
                      borderRadius: 20 / 2,
                      marginLeft: 5,
                    }}></View>
                )}
                {item.number == 46 && (
                  <View
                    style={{
                      width: 15,
                      height: 200,
                      backgroundColor: 'lightgreen',
                      borderRadius: 20 / 2,
                      marginLeft: 5,
                    }}></View>
                )}
                {item.number == 58 && (
                  <View
                    style={{
                      width: 15,
                      height: 250,
                      backgroundColor: 'lightgreen',
                      borderRadius: 20 / 2,
                      marginLeft: 5,
                    }}></View>
                )}
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 5,
                    marginLeft: 5,
                    position: 'absolute',
                  }}>
                  {item.number == 1 && commObj.player1In == false && (
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 10 / 2,
                        backgroundColor: 'blue',
                      }}></View>
                  )}

                  {commObj.player1In == true &&
                    commObj.player1Count == item.number && (
                      <View
                        style={{
                          width: 10,
                          height: 20,
                          backgroundColor: 'blue',
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                        }}></View>
                    )}
                  {item.number == 1 && commObj.player2In == false && (
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 10 / 2,
                        backgroundColor: 'red',
                      }}></View>
                  )}
                  {commObj.player2In == true &&
                    commObj.player2Count == item.number && (
                      <View
                        style={{
                          width: 10,
                          height: 20,
                          backgroundColor: 'red',
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                        }}></View>
                    )}
                </View>
              </View>
            );
          })}
        </View>
        <View>
          <View>
            <Text>{commObj.diseNumber}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'lightblue',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 5,
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: commObj.player1 ? 'bold' : '500',
                  color: commObj.player1 ? 'blue' : '#000',
                }}>
                Player 1
              </Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                if (commObj.player1) {
                  disePlayer1Hanlder();
                }
                if (commObj.player2) {
                  disePlayer2Hanlder();
                }
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 50,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: commObj.player1 ? 'blue' : 'red',
                    fontWeight: 'bold',
                  }}>
                  {commObj.diseNumber}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: commObj.player2 ? 'bold' : '500',
                  color: commObj.player2 ? 'red' : '#000',
                }}>
                Player 2
              </Text>
            </View>
          </View>
        </View>

        {commObj.player1Count == 100 || commObj.player2Count == 100 ? (
          <Modal animationType="fade" transparent={true}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 20,
                backgroundColor: 'rgba(0,0,0,0.7)',
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: '80%',
                  height: 200,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    color:
                      commObj.player1Count == 100
                        ? 'blue'
                        : commObj.player2Count == 100
                        ? 'red'
                        : '#000',
                  }}>
                  {commObj.player1Count == 100
                    ? 'Player 1'
                    : commObj.player2Count == 100
                    ? 'Playe 2'
                    : ''}
                  Win
                </Text>
                <View
                  style={{
                    paddingTop: 40,
                  }}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      setCommObj(prev => ({
                        ...prev,
                        diseNumber: 1,
                        player1: true,
                        player1In: false,
                        player2: false,
                        player2In: false,
                        player1Count: 0,
                        player2Count: 0,
                      }));
                    }}>
                    <View
                      style={{
                        backgroundColor: 'lightblue',
                        paddingHorizontal: 30,
                        paddingVertical: 8,
                        borderRadius: 8,
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          color:
                            commObj.player1Count == 100
                              ? 'blue'
                              : commObj.player2Count == 100
                              ? 'red'
                              : '#000',
                          fontWeight: 'bold',
                        }}>
                        OKay
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          </Modal>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
