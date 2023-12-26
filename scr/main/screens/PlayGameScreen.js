import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Modal,
  Image,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomLadder from '../components/CustomLadder';
import CustomSnakes from '../components/CustomSnakes';
import Dice from '../components/Dice';
import PlayerCoin from '../components/PlayerCoin';
import UserIndicator from '../components/UserIndicator';

const PlayGameScreen = () => {
  const colors = ['coral', 'green', '#2ae830', 'red'];
  const [commObj, setCommObj] = useState({
    NumbersArray: [],
    modal: true,
    numberOfPlayers: 2,
    player: 'p1',
    diseNumber: 1,
    playerOneName: '',
    playerOneCount: null,
    playerTwoName: '',
    playerTwoCount: null,
    playerThreeName: '',
    PlayerThreeCount: null,
    playerFourName: '',
    playerFourCount: null,
    ladderSnakes: null,
    refresh: false,
    snakesLines: null,
    laddersLines: null,
    active: true,
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
      player === 'p1'
        ? commObj.playerOneCount
        : player === 'p2'
        ? commObj.playerTwoCount
        : player === 'p3'
        ? commObj.PlayerThreeCount
        : commObj.playerFourCount;
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
        await new Promise(resolve => setTimeout(resolve, 200));
        setCommObj(prev => ({
          ...prev,
          playerOneCount: player === 'p1' ? i : prev.playerOneCount,
          playerTwoCount: player === 'p2' ? i : prev.playerTwoCount,
          PlayerThreeCount: player === 'p3' ? i : prev.PlayerThreeCount,
          playerFourCount: player === 'p4' ? i : prev.playerFourCount,
        }));
      }
      if (player === 'p1') {
        playerOneSnakeLadderHandler(playerCount + randomNum);
      } else if (player === 'p2') {
        playerTwoSnakeLadderHandler(playerCount + randomNum);
      } else if (player === 'p3') {
        playerThreeSnakeLadderHandler(playerCount + randomNum);
      } else {
        playerFourSnakeLadderHandler(playerCount + randomNum);
      }
      setCommObj(prev => ({
        ...prev,
        active: true,
      }));
    } else {
      setCommObj(prev => ({
        ...prev,
        diseNumber: randomNum,
        player:
          player === 'p1'
            ? 'p2'
            : player === 'p2'
            ? prev.numberOfPlayers > 2
              ? 'p3'
              : 'p1'
            : player === 'p3'
            ? prev.numberOfPlayers > 3
              ? 'p4'
              : 'p1'
            : 'p1',
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
              player: prev.numberOfPlayers > 2 ? 'p3' : 'p1',
            }));
          }, 100);
        } else {
          setCommObj(prev => ({
            ...prev,
            player: prev.numberOfPlayers > 2 ? 'p3' : 'p1',
          }));
        }
      });
    }
  }

  function playerThreeSnakeLadderHandler(value) {
    if (commObj.ladderSnakes) {
      commObj.ladderSnakes.forEach(item => {
        if (value in item) {
          setTimeout(() => {
            setCommObj(prev => ({
              ...prev,
              PlayerThreeCount: item[value],
              player: prev.numberOfPlayers > 3 ? 'p4' : 'p1',
            }));
          }, 100);
        } else {
          setCommObj(prev => ({
            ...prev,
            player: prev.numberOfPlayers > 3 ? 'p4' : 'p1',
          }));
        }
      });
    }
  }

  function playerFourSnakeLadderHandler(value) {
    if (commObj.ladderSnakes) {
      commObj.ladderSnakes.forEach(item => {
        if (value in item) {
          setTimeout(() => {
            setCommObj(prev => ({
              ...prev,
              playerFourCount: item[value],
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
          paddingTop: 20,
        }}>
        <View
          style={{
            paddingHorizontal: 10,
            alignItems: 'center',
            flexDirection: 'row',
            paddingVertical: 10,
            justifyContent:
              commObj.numberOfPlayers > 2 ? 'space-between' : 'flex-end',
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection:
                commObj.numberOfPlayers > 2 ? 'row' : 'row-reverse',
            }}>
            <View>
              <Dice
                diseNumber={commObj.diseNumber}
                active={commObj.active}
                player={commObj.player}
                disePlayerHanlder={disePlayerHanlder}
                number={'p2'}
                name={commObj.playerTwoName}
                src={require('../../../assets/images/redkey.png')}
              />
            </View>
            {commObj.player == 'p2' && commObj.active && (
              <View
                style={{
                  paddingLeft: 10,
                  transform:
                    commObj.numberOfPlayers > 2 ? '' : [{rotate: '180deg'}],
                  marginBottom: 20,
                }}>
                <UserIndicator />
              </View>
            )}
          </View>
          {commObj.numberOfPlayers > 2 && (
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              {commObj.player == 'p3' && commObj.active && (
                <View
                  style={{
                    paddingLeft: 15,
                    transform: [{rotate: '180deg'}],
                    marginBottom: 20,
                  }}>
                  <UserIndicator />
                </View>
              )}
              <View>
                <Dice
                  diseNumber={commObj.diseNumber}
                  active={commObj.active}
                  player={commObj.player}
                  disePlayerHanlder={disePlayerHanlder}
                  number={'p3'}
                  name={commObj.playerThreeName}
                  src={require('../../../assets/images/yellowkey.png')}
                />
              </View>
            </View>
          )}
        </View>
        <View
          style={{
            position: 'relative',
            width: '100%',
            height: 500,
          }}>
          {commObj.laddersLines &&
            commObj.laddersLines.map((item, index) => {
              return (
                <CustomLadder
                  key={index}
                  x1={item.x1}
                  y1={item.y1}
                  x2={item.x2}
                  y2={item.y2}
                />
              );
            })}
          {commObj.snakesLines &&
            commObj.snakesLines.map((item, index) => {
              return (
                <CustomSnakes
                  key={index}
                  x1={item.x1}
                  y1={item.y1}
                  x2={item.x2}
                  y2={item.y2}
                  color={colors[index]}
                  show={index}
                />
              );
            })}
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
                          flex: 1,
                          width: '10%',
                          height: 50,
                          borderWidth: 0.5,
                          borderColor: '#777777',
                          backgroundColor: item2 % 2 !== 0 ? '#fcf0f0' : '#fff',
                          position: 'relative',
                        }}>
                        <View
                          style={{
                            position: 'absolute',
                            right: 5,
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
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingBottom: 10,
                          }}>
                          {commObj.playerOneCount == item2 && (
                            <View
                              style={{
                                position: 'relative',
                                zIndex: 19,
                              }}>
                              {commObj.player == 'p1' && commObj.active && (
                                <View
                                  style={{
                                    position: 'absolute',
                                    top: 13,
                                  }}>
                                  <PlayerCoin />
                                </View>
                              )}
                              <Image
                                style={{
                                  width:
                                    commObj.playerOneCount ==
                                    commObj.playerTwoCount
                                      ? 20
                                      : 30,
                                  resizeMode: 'contain',
                                  height:
                                    commObj.playerOneCount ==
                                    commObj.playerTwoCount
                                      ? 20
                                      : 30,
                                }}
                                source={require('../../../assets/images/bluekey.png')}
                              />
                              <View
                                style={{
                                  width: 20,
                                  height: 6,
                                  backgroundColor: 'gray',
                                  alignSelf: 'center',
                                  borderRadius: 50,
                                }}></View>
                            </View>
                          )}
                          {commObj.playerTwoCount == item2 && (
                            <View
                              style={{
                                position: 'relative',
                              }}>
                              {commObj.player == 'p2' && commObj.active && (
                                <View
                                  style={{
                                    position: 'absolute',
                                    top: 13,
                                  }}>
                                  <PlayerCoin />
                                </View>
                              )}
                              <Image
                                style={{
                                  width:
                                    commObj.playerOneCount ==
                                    commObj.playerTwoCount
                                      ? 20
                                      : 30,
                                  resizeMode: 'contain',
                                  height:
                                    commObj.playerOneCount ==
                                    commObj.playerTwoCount
                                      ? 20
                                      : 30,
                                }}
                                source={require('../../../assets/images/redkey.png')}
                              />
                              <View
                                style={{
                                  width: 20,
                                  height: 6,
                                  backgroundColor: 'gray',
                                  alignSelf: 'center',
                                  borderRadius: 50,
                                }}></View>
                            </View>
                          )}
                          {commObj.PlayerThreeCount == item2 && (
                            <View
                              style={{
                                position: 'relative',
                              }}>
                              {commObj.player == 'p3' && commObj.active && (
                                <View
                                  style={{
                                    position: 'absolute',
                                    top: 13,
                                  }}>
                                  <PlayerCoin />
                                </View>
                              )}
                              <Image
                                style={{
                                  width:
                                    commObj.playerOneCount ==
                                    commObj.playerTwoCount
                                      ? 20
                                      : 30,
                                  resizeMode: 'contain',
                                  height:
                                    commObj.playerOneCount ==
                                    commObj.playerTwoCount
                                      ? 20
                                      : 30,
                                }}
                                source={require('../../../assets/images/yellowkey.png')}
                              />
                              <View
                                style={{
                                  width: 20,
                                  height: 6,
                                  backgroundColor: 'gray',
                                  alignSelf: 'center',
                                  borderRadius: 50,
                                }}></View>
                            </View>
                          )}
                          {commObj.playerFourCount == item2 && (
                            <View
                              style={{
                                position: 'relative',
                              }}>
                              {commObj.player == 'p4' && commObj.active && (
                                <View
                                  style={{
                                    position: 'absolute',
                                    top: 13,
                                  }}>
                                  <PlayerCoin />
                                </View>
                              )}
                              <Image
                                style={{
                                  width:
                                    commObj.playerOneCount ==
                                    commObj.playerTwoCount
                                      ? 20
                                      : 30,
                                  resizeMode: 'contain',
                                  height:
                                    commObj.playerOneCount ==
                                    commObj.playerTwoCount
                                      ? 20
                                      : 30,
                                }}
                                source={require('../../../assets/images/greenkey.png')}
                              />
                              <View
                                style={{
                                  width: 20,
                                  height: 6,
                                  backgroundColor: 'gray',
                                  alignSelf: 'center',
                                  borderRadius: 50,
                                }}></View>
                            </View>
                          )}
                        </View>
                        {item2 == 1 && (
                          <View
                            style={{
                              position: 'absolute',
                              bottom: 3,
                              left: 3,
                              flexDirection: 'row',
                              flexWrap: 'wrap',
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
                            {commObj.PlayerThreeCount == null && (
                              <View
                                style={{
                                  width: 10,
                                  height: 10,
                                  borderRadius: 10 / 2,
                                  backgroundColor: 'yellow',
                                }}></View>
                            )}
                            {commObj.playerFourCount == null && (
                              <View
                                style={{
                                  width: 10,
                                  height: 10,
                                  borderRadius: 10 / 2,
                                  backgroundColor: 'green',
                                }}></View>
                            )}
                          </View>
                        )}
                      </View>
                    );
                  })}
                </View>
              );
            })}
        </View>
        <View
          style={{
            paddingTop: 20,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 15,
            }}>
            <View>
              <Dice
                diseNumber={commObj.diseNumber}
                active={commObj.active}
                player={commObj.player}
                disePlayerHanlder={disePlayerHanlder}
                number={'p1'}
                name={commObj.playerOneName}
                src={require('../../../assets/images/bluekey.png')}
              />
            </View>
            {commObj.player == 'p1' && commObj.active && (
              <View
                style={{
                  paddingTop: 20,
                }}>
                <UserIndicator />
              </View>
            )}
          </View>
          {commObj.numberOfPlayers > 3 && (
            <View
              style={{
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 15,
              }}>
              <View>
                <Dice
                  diseNumber={commObj.diseNumber}
                  active={commObj.active}
                  player={commObj.player}
                  disePlayerHanlder={disePlayerHanlder}
                  number={'p4'}
                  name={commObj.playerFourName}
                  src={require('../../../assets/images/greenkey.png')}
                />
              </View>
              {commObj.player == 'p4' && commObj.active && (
                <View
                  style={{
                    transform: [{rotate: '180deg'}],
                    marginTop: 20,
                  }}>
                  <UserIndicator />
                </View>
              )}
            </View>
          )}
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
                    ? commObj.playerOneName !== ''
                      ? commObj.playerOneName
                      : 'Player 1'
                    : commObj.playerTwoCount == 100
                    ? commObj.playerTwoName !== ''
                      ? commObj.playerTwoName
                      : 'Player 2'
                    : ''}{' '}
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
        <Modal visible={commObj.modal} animationType="fade" transparent={true}>
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
                  <View>
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        resizeMode: 'contain',
                      }}
                      source={require('../../../assets/images/bluekey.png')}
                    />
                  </View>
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
                        fontSize: 14,
                        lineHeight: 21,
                        color: '#000',
                      }}
                      placeholderTextColor="gray"
                      value={commObj.playerOneName}
                      onChangeText={text => {
                        setCommObj(prev => ({
                          ...prev,
                          playerOneName: text,
                        }));
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
                  <View>
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        resizeMode: 'contain',
                      }}
                      source={require('../../../assets/images/redkey.png')}
                    />
                  </View>
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
                        fontSize: 14,
                        lineHeight: 21,
                        color: '#000',
                      }}
                      placeholderTextColor="gray"
                      placeholder="Player 2"
                      value={commObj.playerTwoName}
                      onChangeText={text => {
                        setCommObj(prev => ({
                          ...prev,
                          playerTwoName: text,
                        }));
                      }}
                    />
                  </View>
                </View>
                {commObj.numberOfPlayers > 2 && (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                    }}>
                    <View>
                      <Image
                        style={{
                          width: 20,
                          height: 20,
                          resizeMode: 'contain',
                        }}
                        source={require('../../../assets/images/greenkey.png')}
                      />
                    </View>
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
                        placeholder="Player 3"
                        value={commObj.playerThreeName}
                        onChangeText={text => {
                          setCommObj(prev => ({
                            ...prev,
                            playerThreeName: text,
                          }));
                        }}
                      />
                    </View>
                  </View>
                )}
                {commObj.numberOfPlayers > 3 && (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                    }}>
                    <View>
                      <Image
                        style={{
                          width: 20,
                          height: 20,
                          resizeMode: 'contain',
                        }}
                        source={require('../../../assets/images/yellowkey.png')}
                      />
                    </View>
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
                        placeholder="Player 4"
                        value={commObj.playerFourName}
                        onChangeText={text => {
                          setCommObj(prev => ({
                            ...prev,
                            playerFourName: text,
                          }));
                        }}
                      />
                    </View>
                  </View>
                )}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                }}>
                {[2, 3, 4].map((item, index) => {
                  return (
                    <View key={index}>
                      <TouchableWithoutFeedback
                        onPress={() => {
                          setCommObj(prev => ({
                            ...prev,
                            numberOfPlayers: item,
                          }));
                        }}>
                        <View
                          style={{
                            width: 40,
                            height: 30,
                            borderWidth: 3,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor:
                              item == commObj.numberOfPlayers
                                ? 'coral'
                                : '#fff',
                          }}>
                          <Text
                            style={{
                              fontSize: 16,
                              lineHeight: 23,
                              fontWeight: '500',
                              color: '#000',
                            }}>
                            {item}P
                          </Text>
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                  );
                })}
              </View>
              <View>
                <TouchableWithoutFeedback
                  onPress={() => {
                    setCommObj(prev => ({
                      ...prev,
                      modal: false,
                    }));
                  }}>
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
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default PlayGameScreen;
