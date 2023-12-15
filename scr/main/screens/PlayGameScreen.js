import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Line, Svg} from 'react-native-svg';

const PlayGameScreen = () => {
  const [commObj, setCommObj] = useState({
    NumbersArray: [],
    player: 'p1',
    diseNumber: 1,
    playerOneCount: null,
    playerTwoCount: null,
    ladderSnakes: null,
    refresh: false,
    snakesLines: null,
    laddersLines: null,
    active: true,
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

  // useEffect(() => {
  //   let value = commObj.playerOneCount;
  //   if (commObj.ladderSnakes) {
  //     commObj.ladderSnakes.forEach(item => {
  //       if (value in item) {
  //         setTimeout(() => {
  //           setCommObj(prev => ({
  //             ...prev,
  //             playerOneCount: item[value],
  //             player: 'p2',
  //           }));
  //         }, 100);
  //       } else {
  //         setCommObj(prev => ({
  //           ...prev,
  //           player: 'p2',
  //         }));
  //       }
  //     });
  //   }
  // }, [commObj.playerOneCount]);

  // useEffect(() => {
  //   let value = commObj.playerTwoCount;
  //   if (commObj.ladderSnakes) {
  //     commObj.ladderSnakes.forEach(item => {
  //       if (value in item) {
  //         setTimeout(() => {
  //           setCommObj(prev => ({
  //             ...prev,
  //             playerTwoCount: item[value],
  //             player: 'p1',
  //           }));
  //         }, 100);
  //       } else {
  //         setCommObj(prev => ({
  //           ...prev,
  //           player: 'p1',
  //         }));
  //       }
  //     });
  //   }
  // }, [commObj.playerTwoCount]);

  // useEffect(() => {
  //   let value =
  //     commObj.player == 'p1' ? commObj.playerOneCount : commObj.playerTwoCount;
  //   if (commObj.ladderSnakes) {
  //     commObj.ladderSnakes.forEach(item => {
  //       if (value in item) {
  //         setTimeout(() => {
  //           setCommObj(prev => ({
  //             ...prev,
  //             playerOneCount:
  //               commObj.player == 'p1' ? item[value] : commObj.playerOneCount,
  //             playerTwoCount:
  //               commObj.player == 'p2' ? item[value] : commObj.playerTwoCount,
  //             // player: commObj.player == 'p1' ? 'p2' : 'p1',
  //           }));
  //         }, 100);
  //       } else {
  //         setCommObj(prev => ({
  //           ...prev,
  //           player: commObj.player == 'p1' ? 'p2' : 'p1',
  //         }));
  //       }
  //     });
  //   }
  // }, [commObj.playerOneCount, commObj.playerTwoCount]);

  async function disePlayerHanlder(player) {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    let playerCount =
      player == 'p1' ? commObj.playerOneCount : commObj.playerTwoCount;
    setCommObj(prev => ({
      ...prev,
      diseNumber: randomNum,
      active: false,
    }));
    if (
      (randomNum === 6 || playerCount !== null) &&
      playerCount + randomNum <= 100
    ) {
      for (let i = playerCount; i <= playerCount + randomNum; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        setCommObj(prev => ({
          ...prev,
          playerOneCount: player === 'p1' ? i : prev.playerOneCount,
          playerTwoCount: player === 'p2' ? i : prev.playerTwoCount,
        }));
      }
      if (player === 'p1') {
        playerOneSnakeLadderHandler(playerCount + randomNum);
      } else {
        playerTwoSnakeLadderHandler(playerCount + randomNum);
      }
      setCommObj(prev => ({
        ...prev,
        active: true,
      }));
    } else {
      setCommObj(prev => ({
        ...prev,
        diseNumber: randomNum,
        player: player === 'p1' ? 'p2' : 'p1',
        active: true,
      }));
    }

    // for (let i = playerCount; i <= playerCount + randomNum; i++) {
    //   if (
    //     (randomNum == 6 || playerCount !== null) &&
    //     playerCount + randomNum <= 100
    //   ) {
    //     setCommObj(prev => ({
    //       ...prev,
    //       diseNumber: randomNum,
    //       playerOneCount: player == 'p1' ? i : prev.playerOneCount,
    //       playerTwoCount: player == 'p2' ? i : prev.playerTwoCount,
    //     }));
    //   } else {
    //     setCommObj(prev => ({
    //       ...prev,
    //       diseNumber: randomNum,
    //       player: player == 'p1' ? 'p2' : 'p1',
    //     }));
    //   }
    // }
  }

  function playerOneSnakeLadderHandler(value) {
    // let value = commObj.playerOneCount;
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
  }

  function playerTwoSnakeLadderHandler(value) {
    // let value = commObj.playerTwoCount;
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
    for (let i = 0; Object.keys(snakesObj).length < 4; i++) {
      let startNum = Math.floor(Math.random() * (99 - 12 + 1)) + 12;
      let endNum = Math.floor(Math.random() * (startNum - 2 + 1)) + 2;
      if (
        startNum > endNum + 12 &&
        !Object.values(snakesObj).includes(endNum)
      ) {
        snakesObj[startNum] = endNum;
      }
    }
    for (let i = 0; Object.keys(laddersObj).length < 4; i++) {
      let startNum = Math.floor(Math.random() * (90 - 6 + 1)) + 6;
      let endNum = Math.floor(Math.random() * (99 - startNum + 1)) + startNum;
      if (
        endNum > startNum + 12 &&
        !Object.values(laddersObj).includes(endNum)
      ) {
        laddersObj[startNum] = endNum;
      }
    }
    for (let key in snakesObj) {
      if (
        laddersObj.hasOwnProperty(snakesObj[key]) ||
        laddersObj.hasOwnProperty(key) ||
        Object.values(snakesObj).includes(Number(key)) ||
        Object.values(laddersObj).includes(Number(key)) ||
        Object.values(laddersObj).includes(snakesObj[key])
      ) {
        delete snakesObj[key];
      }
    }

    for (let key in laddersObj) {
      if (
        snakesObj.hasOwnProperty(laddersObj[key]) ||
        snakesObj.hasOwnProperty(key) ||
        Object.values(laddersObj).includes(Number(key)) ||
        Object.values(snakesObj).includes(Number(key))
      ) {
        delete laddersObj[key];
      }
    }

    randomSnakeLadders.push(snakesObj);
    randomSnakeLadders.push(laddersObj);
    setCommObj(prev => ({
      ...prev,
      ladderSnakes: randomSnakeLadders,
      refresh: false,
    }));
    let snakes = [];
    let ladders = [];
    if (randomSnakeLadders) {
      for (let key in randomSnakeLadders[0]) {
        let obj = {};
        let value = randomSnakeLadders[0][key].toString();
        if (key[0] % 2 == 0) {
          obj['x1'] = key[1] == '0' ? 5 : key[1] * 10 - 5;
          obj['y1'] =
            key[1] == '0' ? (10 - key[0]) * 50 + 25 : (10 - key[0]) * 50 - 25;
        } else {
          obj['x1'] = key[1] == 0 ? 95 : (10 - key[1]) * 10 + 5;
          obj['y1'] =
            key[1] == 0 ? (10 - key[0]) * 50 + 25 : (10 - key[0]) * 50 - 25;
        }
        if (value[0] % 2 == 0) {
          obj['x2'] = value[1]
            ? value[1] == 0
              ? 5
              : value[1] * 10 - 5
            : 10 * value[0] - 5;
          obj['y2'] = value[1]
            ? value[1] == 0
              ? (10 - value[0]) * 50 + 25
              : (10 - value[0] - 1) * 50 + 25
            : 475;
        } else {
          obj['x2'] = value[1]
            ? value[1] == 0
              ? 95
              : (10 - value[1]) * 10 + 5
            : value[0] * 10 - 5;
          obj['y2'] = value[1]
            ? value[1] == 0
              ? (10 - value[0]) * 50 + 25
              : (10 - value[0]) * 50 - 25
            : 475;
        }
        if (obj) {
          snakes.push(obj);
        }
      }
      for (let key in randomSnakeLadders[1]) {
        let obj = {};
        let value = randomSnakeLadders[1][key].toString();
        if (key[0] % 2 == 0) {
          obj['x1'] =
            key[1] == 0 ? 5 : key[1] ? key[1] * 10 - 5 : key[0] * 10 - 5;
          obj['y1'] =
            key[1] == 0
              ? (10 - key[0]) * 50 + 25
              : key[1]
              ? (10 - key[0]) * 50 - 25
              : 475;
        } else {
          obj['x1'] =
            key[1] == 0
              ? 95
              : key[1]
              ? (10 - key[1]) * 10 + 5
              : key[0] * 10 - 5;
          obj['y1'] =
            key[1] == 0
              ? (10 - key[0]) * 50 + 25
              : key[1]
              ? (10 - key[0]) * 50 - 25
              : 475;
        }

        if (value[0] % 2 == 0) {
          obj['x2'] = value[1]
            ? value[1] == 0
              ? 5
              : value[1] * 10 - 5
            : 10 * value[0] - 5;
          obj['y2'] = value[1]
            ? value[1] == 0
              ? (10 - value[0]) * 50 + 25
              : (10 - value[0] - 1) * 50 + 25
            : 475;
        } else {
          obj['x2'] = value[1]
            ? value[1] == 0
              ? 95
              : (10 - value[1]) * 10 + 5
            : value[0] * 10 - 5;
          obj['y2'] = value[1]
            ? value[1] == 0
              ? (10 - value[0]) * 50 + 25
              : (10 - value[0]) * 50 - 25
            : 475;
        }

        if (obj) {
          ladders.push(obj);
        }
      }
    }
    setCommObj(prev => ({
      ...prev,
      snakesLines: snakes,
      laddersLines: ladders,
    }));
  }, [commObj.refresh]);

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
            PlayGameScreen
          </Text>
        </View>
        <View
          style={{
            position: 'relative',
            width: '100%',
            height: '500',
          }}>
          <View
            style={{
              position: 'absolute',
              zIndex: 1,
              width: '100%',
              height: '100%',
            }}>
            <Svg height="500" width="100%">
              {commObj.snakesLines &&
                commObj.snakesLines.map((item, index) => {
                  return (
                    <Line
                      key={index}
                      x1={`${item.x1}%`}
                      y1={item.y1}
                      x2={`${item.x2}%`}
                      y2={item.y2}
                      stroke="#e64343"
                      strokeWidth="10"
                    />
                  );
                })}
              {commObj.laddersLines &&
                commObj.laddersLines.map((item, index) => {
                  return (
                    <Line
                      key={index}
                      x1={`${item.x1}%`}
                      y1={item.y1}
                      x2={`${item.x2}%`}
                      y2={item.y2}
                      stroke="#209cf5"
                      strokeWidth="10"
                    />
                  );
                })}
            </Svg>
          </View>
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
                              zIndex: 5,
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
                              zIndex: 5,
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
                              zIndex: 5,
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
                              zIndex: 5,
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
                            marginLeft: 2,
                          }}>
                          {commObj.playerOneCount == item2 && (
                            <View
                              style={{
                                width: 15,
                                height: 20,
                                backgroundColor: 'blue',
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                              }}></View>
                          )}
                          {commObj.playerTwoCount == item2 && (
                            <View
                              style={{
                                width: 15,
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
            paddingTop: 20,
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
                if (commObj.active) {
                  disePlayerHanlder(commObj.player);
                }
                // if (commObj.player == 'p1') {
                //   disePlayer1Hanlder();
                // }
                // if (commObj.player == 'p2') {
                //   disePlayer2Hanlder();
                // }
              }}>
              <View
                style={{
                  backgroundColor: commObj.active ? '#fff' : 'lightgray',
                  width: 70,
                  paddingVertical: 5,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: commObj.active
                      ? commObj.player == 'p1'
                        ? 'blue'
                        : 'red'
                      : 'green',
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
          <View
            style={{
              paddingTop: 50,
              alignItems: 'center',
            }}>
            <TouchableWithoutFeedback
              onPress={() => {
                setCommObj(prev => ({
                  ...prev,
                  player: 'p1',
                  diseNumber: 1,
                  playerOneCount: null,
                  playerTwoCount: null,
                  refresh: true,
                }));
              }}>
              <View
                style={{
                  backgroundColor: 'blue',
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 23,
                    color: '#fff',
                  }}>
                  Refresh
                </Text>
              </View>
            </TouchableWithoutFeedback>
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
                        refresh: true,
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
        {/* <Modal animationType="fade" transparent={true}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 20,
              backgroundColor: 'rgba(0,0,0,0.8)',
            }}>
            <View
              style={{
                flexDirection: 'column',
                gap: 15,
                backgroundColor: '#fff',
                width: '100%',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 20,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    textTransform: 'uppercase',
                    color: '#000',
                    fontWeight: 'bold',
                  }}>
                  choose color and name
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  gap: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 20 / 2,
                      backgroundColor: 'blue',
                    }}></View>
                  <View
                    style={{
                      width: 200,
                    }}>
                    <TextInput
                      style={{
                        borderWidth: 0.5,
                        padding: 0,
                        borderRadius: 8,
                        paddingLeft: 5,
                      }}
                      placeholder="Player 1"
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 20 / 2,
                      backgroundColor: 'red',
                    }}></View>
                  <View
                    style={{
                      width: 200,
                    }}>
                    <TextInput
                      style={{
                        borderWidth: 0.5,
                        padding: 0,
                        borderRadius: 8,
                        paddingLeft: 5,
                      }}
                      placeholder="Player 2"
                    />
                  </View>
                </View>
              </View>
              <View>
                <TouchableWithoutFeedback>
                  <View
                    style={{
                      backgroundColor: 'skyblue',
                      paddingHorizontal: 20,
                      paddingVertical: 5,
                      borderRadius: 8,
                    }}>
                    <Text>Play</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </Modal> */}
      </View>
    </SafeAreaView>
  );
};

export default PlayGameScreen;
