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
    ladderSnakes: null,
    // ladderSnakes: [
    //   [22, 4],
    //   [44, 6],
    //   [65, 27],
    //   [6, 64],
    //   [16, 45],
    // ],
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
    let value = commObj.playerOneCount;
    if (commObj.ladderSnakes) {
      commObj.ladderSnakes.forEach(item => {
        if (value in item) {
          setTimeout(() => {
            setCommObj(prev => ({
              ...prev,
              playerOneCount: item[value],
              player: 'p2',
            }));
          }, 100);
        } else {
          setCommObj(prev => ({
            ...prev,
            player: 'p2',
          }));
        }
      });
    }
  }, [commObj.playerOneCount]);

  useEffect(() => {
    let value = commObj.playerTwoCount;
    if (commObj.ladderSnakes) {
      commObj.ladderSnakes.forEach(item => {
        if (value in item) {
          setTimeout(() => {
            setCommObj(prev => ({
              ...prev,
              playerTwoCount: item[value],
              player: 'p1',
            }));
          }, 100);
        } else {
          setCommObj(prev => ({
            ...prev,
            player: 'p1',
          }));
        }
      });
    }
  }, [commObj.playerTwoCount]);

  function disePlayerHanlder(player) {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    let playerCount =
      player == 'p1' ? commObj.playerOneCount : commObj.playerTwoCount;

    if (
      (randomNum == 6 || playerCount !== null) &&
      playerCount + randomNum <= 100
    ) {
      setCommObj(prev => ({
        ...prev,
        diseNumber: randomNum,
        playerOneCount:
          player == 'p1'
            ? prev.playerOneCount + randomNum
            : prev.playerOneCount,
        playerTwoCount:
          player == 'p2'
            ? prev.playerTwoCount + randomNum
            : prev.playerTwoCount,
        // player: player == 'p1' ? 'p2' : 'p1',
      }));
    } else {
      setCommObj(prev => ({
        ...prev,
        diseNumber: randomNum,
        player: player == 'p1' ? 'p2' : 'p1',
      }));
    }
  }

  // function disePlayer1Hanlder() {
  //   let randomNum = Math.floor(Math.random() * 6) + 1;

  //   if (
  //     (randomNum == 6 || commObj.playerOneCount !== null) &&
  //     commObj.playerOneCount + randomNum <= 100
  //   ) {
  //     setCommObj(prev => ({
  //       ...prev,
  //       diseNumber: randomNum,
  //       playerOneCount: prev.playerOneCount + randomNum,
  //       player: 'p2',
  //     }));
  //   } else {
  //     setCommObj(prev => ({
  //       ...prev,
  //       diseNumber: randomNum,
  //       player: 'p2',
  //     }));
  //   }
  // }

  // function disePlayer2Hanlder() {
  //   let randomNum = Math.floor(Math.random() * 6) + 1;

  //   if (
  //     (randomNum == 6 || commObj.playerTwoCount !== null) &&
  //     commObj.playerTwoCount + randomNum <= 100
  //   ) {
  //     setCommObj(prev => ({
  //       ...prev,
  //       diseNumber: randomNum,
  //       playerTwoCount: prev.playerTwoCount + randomNum,
  //       player: 'p1',
  //     }));
  //   } else {
  //     setCommObj(prev => ({
  //       ...prev,
  //       diseNumber: randomNum,
  //       player: 'p1',
  //     }));
  //   }
  // }

  useEffect(() => {
    let randomSnakeLadders = [];
    let snakesObj = {};
    let laddersObj = {};
    for (let i = 0; Object.keys(snakesObj).length < 5; i++) {
      let startNum = Math.floor(Math.random() * 98) + 1;
      let endNum = Math.floor(Math.random() * 98) + 1;
      if (startNum > endNum && startNum > endNum + 16) {
        snakesObj[startNum] = endNum;
      }
    }
    for (let i = 0; Object.keys(laddersObj).length < 5; i++) {
      let startNum = Math.floor(Math.random() * 98) + 1;
      let endNum = Math.floor(Math.random() * 98) + 1;
      if (startNum < endNum && endNum > startNum + 16) {
        laddersObj[startNum] = endNum;
      }
    }

    randomSnakeLadders.push(snakesObj);
    randomSnakeLadders.push(laddersObj);
    setCommObj(prev => ({
      ...prev,
      ladderSnakes: randomSnakeLadders,
    }));
  }, []);

  // useEffect(() => {
  //   snakesAndLaddersHandler();
  // }, []);

  // const snakesAndLaddersHandler = () => {
  //   let randomSnakeLadders = [];
  //   let snakesObj = {};
  //   let ladderObj = {};
  //   for (let i = 0; i < 10; i++) {
  //     let startNum = Math.floor(Math.random() * 98) + 1;
  //     let endNum = Math.floor(Math.random() * 98) + 1;
  //     if (startNum > endNum) {
  //       snakesObj[startNum] = endNum;
  //     } else {
  //       ladderObj[startNum] = endNum;
  //     }
  //   }
  //   randomSnakeLadders.push(snakesObj);
  //   randomSnakeLadders.push(ladderObj);
  //   setCommObj(prev => ({
  //     ...prev,
  //     ladderSnakes: randomSnakeLadders,
  //   }));
  // };

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
                          position: 'relative',
                        }}>
                        {commObj.ladderSnakes[0][item2] && (
                          <View
                            style={{
                              backgroundColor: 'coral',
                              width: 20,
                              height: 20,
                              alignItems: 'center',
                              borderRadius: 20 / 2,
                              position: 'absolute',
                            }}>
                            <Text
                              style={{
                                fontSize: 18,
                                color: '#fff',
                              }}>
                              S
                            </Text>
                          </View>
                        )}
                        {commObj.ladderSnakes[0][item2] && (
                          <View
                            style={{
                              position: 'absolute',
                              bottom: 0,
                            }}>
                            <Text
                              style={{
                                fontSize: 10,
                                color: '#000',
                              }}>
                              {`${item2} to ${commObj.ladderSnakes[0][item2]}`}
                            </Text>
                          </View>
                        )}
                        {commObj.ladderSnakes[1][item2] && (
                          <View
                            style={{
                              backgroundColor: 'lightblue',
                              width: 20,
                              height: 20,
                              alignItems: 'center',
                              borderRadius: 20 / 2,
                              position: 'absolute',
                            }}>
                            <Text
                              style={{
                                fontSize: 18,
                                color: 'blue',
                              }}>
                              L
                            </Text>
                          </View>
                        )}
                        {commObj.ladderSnakes[1][item2] && (
                          <View
                            style={{
                              position: 'absolute',
                              bottom: 0,
                            }}>
                            <Text
                              style={{
                                fontSize: 10,
                                color: '#000',
                              }}>
                              {`${item2} to ${commObj.ladderSnakes[1][item2]}`}
                            </Text>
                          </View>
                        )}
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
                disePlayerHanlder(commObj.player);
                // if (commObj.player == 'p1') {
                //   disePlayer1Hanlder();
                // }
                // if (commObj.player == 'p2') {
                //   disePlayer2Hanlder();
                // }
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
