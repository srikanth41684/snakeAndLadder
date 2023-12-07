import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const PlayGameScreen = () => {
  const [commObj, setCommObj] = useState({
    NumbersArray: [],
    player: 'p1',
    diseNumber: 1,
    playerOneCount: null,
    playerTwoCount: null,
    // ladderSnakes: null,
    ladderSnakes: [
      [22, 4],
      [44, 6],
      [65, 27],
      [6, 64],
      [16, 45],
    ],
  });

  useEffect(() => {
    let result = [];
    let counter = 1;
    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let j = 0; j < 10; j++) {
        row.push(counter++);
      }
      if (i % 2 === 0) {
        result.push(row);
      } else {
        result.push(row.reverse());
      }
    }
    setCommObj(prev => ({
      ...prev,
      NumbersArray: result.reverse(),
    }));
  }, []);

  useEffect(() => {
    let randomArrays = [];
    for (let i = 0; i < 10; i++) {
      let randomArray = [];
      for (let j = 0; j < 2; j++) {
        let randomNumber = Math.floor(Math.random() * 100);
        if (randomNumber !== 100 && randomNumber !== 1) {
          if (randomArray.length == 0) {
            randomArray.push(randomNumber);
          } else if (randomNumber >= randomArray[0] + 16) {
            randomArray.push(randomNumber);
          } else if (randomNumber <= randomArray[0] - 16) {
            randomArray.push(randomNumber);
          } else {
            randomArray.push(randomNumber + 20);
          }
        }
      }
      if (randomArrays.length > 0) {
      }
      randomArrays.push(randomArray);
    }
    setCommObj(prev => ({
      ...prev,
      ladderSnakes: randomArrays,
    }));
  }, []);

  // useEffect(() => {
  //   let snakesStart = [];
  //   let snakesEnd = [];
  //   let laddersStart = [];
  //   let laddersEnd = [];
  //   commObj.ladderSnakes.filter(item => {
  //     if (item[0] > item[1]) {
  //       snakesStart.push(item[0]);
  //       snakesEnd.push(item[1]);
  //     } else {
  //       laddersStart.push(item[0]);
  //       laddersEnd.push(item[1]);
  //     }
  //   });
  //   console.log('ladders-------->', snakesStart);
  // }, []);

  useEffect(() => {
    if (commObj.ladderSnakes) {
      commObj.ladderSnakes.forEach(item => {
        if (item[0] == commObj.playerOneCount) {
          setCommObj(prev => ({
            ...prev,
            playerOneCount: item[1],
          }));
        }
      });
    }
  }, [commObj.playerOneCount]);

  function disePlayer1Hanlder() {
    let arr = [1, 2, 3, 4, 5, 6];
    let randomNum = arr[Math.floor(Math.random() * arr.length)];

    setCommObj(prev => ({
      ...prev,
      diseNumber: randomNum,
      player: 'p2',
    }));
    if (
      (randomNum == 6 || commObj.playerOneCount !== null) &&
      commObj.playerOneCount + randomNum <= 100
    ) {
      setCommObj(prev => ({
        ...prev,
        playerOneCount: prev.playerOneCount + randomNum,
      }));
    }
  }

  function disePlayer2Hanlder() {
    let arr = [1, 2, 3, 4, 5, 6];
    let randomNum = arr[Math.floor(Math.random() * arr.length)];

    setCommObj(prev => ({
      ...prev,
      diseNumber: randomNum,
      player: 'p1',
    }));
    if (
      (randomNum == 6 || commObj.playerTwoCount !== null) &&
      commObj.playerTwoCount + randomNum <= 100
    ) {
      setCommObj(prev => ({
        ...prev,
        playerTwoCount: prev.playerTwoCount + randomNum,
      }));
    }
  }

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
        <View>
          {commObj.NumbersArray &&
            commObj.NumbersArray.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                  }}>
                  {item.map((item2, index2) => {
                    return (
                      <View
                        key={index2}
                        style={{
                          width: '10%',
                          height: 50,
                          borderWidth: 0.5,
                          borderColor: '#777777',
                          backgroundColor: item2 % 2 !== 0 ? '#fcf0f0' : '#fff',
                        }}>
                        <View
                          style={{
                            alignItems: 'flex-end',
                          }}>
                          <Text
                            style={{
                              fontSize: 12,
                              color: '#000',
                              fontWeight: 'bold',
                            }}>
                            {item2}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            gap: 5,
                            marginLeft: 5,
                          }}>
                          {commObj.playerOneCount == item2 && (
                            <View
                              style={{
                                width: 10,
                                height: 20,
                                backgroundColor: 'blue',
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                              }}></View>
                          )}
                          {commObj.playerTwoCount == item2 && (
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
              );
            })}
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
          }}>
          {commObj.playerOneCount == null && (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10 / 2,
                backgroundColor: 'blue',
              }}></View>
          )}
          {commObj.playerTwoCount == null && (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10 / 2,
                backgroundColor: 'red',
              }}></View>
          )}
        </View>
        <View
          style={{
            paddingTop: 50,
          }}>
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
                  fontWeight: commObj.player == 'p1' ? 'bold' : '500',
                  color: commObj.player == 'p1' ? 'blue' : '#000',
                }}>
                Player 1
              </Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                if (commObj.player == 'p1') {
                  disePlayer1Hanlder();
                }
                if (commObj.player == 'p2') {
                  disePlayer2Hanlder();
                }
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 70,
                  paddingVertical: 5,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: commObj.player == 'p1' ? 'blue' : 'red',
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
                  fontWeight: commObj.player == 'p2' ? 'bold' : '500',
                  color: commObj.player == 'p2' ? 'red' : '#000',
                }}>
                Player 2
              </Text>
            </View>
          </View>
        </View>
        {commObj.playerOneCount == 100 || commObj.playerTwoCount == 100 ? (
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
                      commObj.playerOneCount == 100
                        ? 'blue'
                        : commObj.playerTwoCount == 100
                        ? 'red'
                        : '#000',
                  }}>
                  {commObj.playerOneCount == 100
                    ? 'Player 1'
                    : commObj.playerTwoCount == 100
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
                        player: 'p1',
                        diseNumber: 1,
                        playerOneCount: null,
                        playerTwoCount: null,
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
                            commObj.playerOneCount == 100
                              ? 'blue'
                              : commObj.playerTwoCount == 100
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

export default PlayGameScreen;

let arr = [
  68, 11, 29, 6, 76, 98, 18, 57, 65, 87, 17, 12, 87, 93, 45, 65, 31, 13, 40,
];

[
  [68, 11],
  [29, 6],
  [76, 98],
  [18, 57],
  [65, 87],
  [17, 12],
  [87, 93],
  [45, 65],
  [31, 13],
  [40, 2],
];
