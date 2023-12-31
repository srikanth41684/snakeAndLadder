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
import Sound from 'react-native-sound';

const PlayGameScreen = () => {
  const colors = ['green', '#2ae830', 'red'];
  const [sound, setSound] = useState(null);
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

  const audioHandler = value => {
    if (sound) {
      sound.release();
    }

    const newSound = new Sound(value, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Error loading audio:', error);
      } else {
        console.log('Audio loaded successfully');
        setSound(newSound);
        newSound.play(success => {
          if (success) {
            console.log('Sound played successfully');
          } else {
            console.log('Error playing sound');
          }
        });
      }
    });
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.release();
      }
    };
  }, [sound]);

  async function disePlayerHanlder(player) {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    audioHandler('diceroll.mp3');
    let playerCount =
      player === 'p1'
        ? commObj.playerOneCount
        : player === 'p2'
        ? commObj.playerTwoCount
        : player === 'p3'
        ? commObj.PlayerThreeCount
        : commObj.playerFourCount;

    setTimeout(() => {
      setCommObj(prev => ({
        ...prev,
        diseNumber: randomNum,
      }));
    }, 600);
    setCommObj(prev => ({
      ...prev,
      // diseNumber: randomNum,
      active: false,
    }));
    if (
      (randomNum === 6 || playerCount !== null) &&
      playerCount + randomNum <= 100
    ) {
      for (let i = playerCount; i <= playerCount + randomNum; i++) {
        await new Promise(resolve => setTimeout(resolve, 200));
        if (playerCount !== i) {
          audioHandler('player_move.mp3');
        }
        setCommObj(prev => ({
          ...prev,
          playerOneCount: player === 'p1' ? i : prev.playerOneCount,
          playerTwoCount: player === 'p2' ? i : prev.playerTwoCount,
          PlayerThreeCount: player === 'p3' ? i : prev.PlayerThreeCount,
          playerFourCount: player === 'p4' ? i : prev.playerFourCount,
        }));
      }
      playerSnakeLadderHandler(player, playerCount + randomNum);
      // if (player === 'p1') {
      //   playerOneSnakeLadderHandler(playerCount + randomNum);
      // } else if (player === 'p2') {
      //   playerTwoSnakeLadderHandler(playerCount + randomNum);
      // } else if (player === 'p3') {
      //   playerThreeSnakeLadderHandler(playerCount + randomNum);
      // } else {
      //   playerFourSnakeLadderHandler(playerCount + randomNum);
      // }
      setCommObj(prev => ({
        ...prev,
        active: true,
      }));
    } else {
      setTimeout(() => {
        setCommObj(prev => ({
          ...prev,
          // diseNumber: randomNum,
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
      }, 1000);
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

  function playerSnakeLadderHandler(player, value) {
    if (commObj.ladderSnakes) {
      commObj.ladderSnakes.forEach(item => {
        if (value in item) {
          audioHandler('snake_hit.mp3');
          setTimeout(() => {
            setCommObj(prev => ({
              ...prev,
              playerOneCount:
                player === 'p1' ? item[value] : prev.playerOneCount,
              playerTwoCount:
                player === 'p2' ? item[value] : prev.playerTwoCount,
              PlayerThreeCount:
                player === 'p3' ? item[value] : prev.PlayerThreeCount,
              playerFourCount:
                player === 'p4' ? item[value] : prev.playerFourCount,
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
            }));
          }, 100);
        } else {
          setCommObj(prev => ({
            ...prev,
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
          }));
        }
      });
    }
  }

  // function playerOneSnakeLadderHandler(value) {
  //   // let value = commObj.playerOneCount;
  //   if (commObj.ladderSnakes) {
  //     commObj.ladderSnakes.forEach(item => {
  //       if (value in item) {
  //         audioHandler('snake_hit.mp3');
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
  // }

  // function playerTwoSnakeLadderHandler(value) {
  //   // let value = commObj.playerTwoCount;
  //   if (commObj.ladderSnakes) {
  //     commObj.ladderSnakes.forEach(item => {
  //       if (value in item) {
  //         audioHandler('snake_hit.mp3');
  //         setTimeout(() => {
  //           setCommObj(prev => ({
  //             ...prev,
  //             playerTwoCount: item[value],
  //             player: prev.numberOfPlayers > 2 ? 'p3' : 'p1',
  //           }));
  //         }, 100);
  //       } else {
  //         setCommObj(prev => ({
  //           ...prev,
  //           player: prev.numberOfPlayers > 2 ? 'p3' : 'p1',
  //         }));
  //       }
  //     });
  //   }
  // }

  // function playerThreeSnakeLadderHandler(value) {
  //   if (commObj.ladderSnakes) {
  //     commObj.ladderSnakes.forEach(item => {
  //       if (value in item) {
  //         audioHandler('snake_hit.mp3');
  //         setTimeout(() => {
  //           setCommObj(prev => ({
  //             ...prev,
  //             PlayerThreeCount: item[value],
  //             player: prev.numberOfPlayers > 3 ? 'p4' : 'p1',
  //           }));
  //         }, 100);
  //       } else {
  //         setCommObj(prev => ({
  //           ...prev,
  //           player: prev.numberOfPlayers > 3 ? 'p4' : 'p1',
  //         }));
  //       }
  //     });
  //   }
  // }

  // function playerFourSnakeLadderHandler(value) {
  //   if (commObj.ladderSnakes) {
  //     commObj.ladderSnakes.forEach(item => {
  //       if (value in item) {
  //         audioHandler('snake_hit.mp3');
  //         setTimeout(() => {
  //           setCommObj(prev => ({
  //             ...prev,
  //             playerFourCount: item[value],
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
  // }

  useEffect(() => {
    let randomSnakeLadders = [];
    let snakesObj = {};
    let laddersObj = {};
    for (let i = 0; Object.keys(snakesObj).length < 3; i++) {
      let ln = Object.keys(snakesObj).length + 1;
      let num = 33 * ln;
      let startNum =
        Math.floor(Math.random() * (num - (num - 28) + 1)) + (num - 28);
      let endNum =
        Math.floor(Math.random() * (num - 32 - startNum + 1)) + startNum;
      if (
        startNum > endNum + 11 &&
        !laddersObj.hasOwnProperty(startNum) &&
        !laddersObj.hasOwnProperty(endNum) &&
        !Object.values(laddersObj).includes(startNum) &&
        !Object.values(laddersObj).includes(endNum)
      ) {
        snakesObj[startNum] = endNum;
      }
    }
    for (let i = 0; Object.keys(laddersObj).length < 4; i++) {
      let ln = Object.keys(laddersObj).length + 1;
      let num = ln == 4 ? 99 : 25 * ln;
      let startNum =
        Math.floor(Math.random() * (num - 10 - (num - 20) + 1)) + (num - 20);
      let endNum = Math.floor(Math.random() * (num - startNum + 1)) + startNum;
      if (
        endNum > startNum + 11 &&
        !snakesObj.hasOwnProperty(startNum) &&
        !snakesObj.hasOwnProperty(endNum) &&
        !Object.values(snakesObj).includes(startNum) &&
        !Object.values(snakesObj).includes(endNum)
      ) {
        laddersObj[startNum] = endNum;
      }
    }
    // for (let key in snakesObj) {
    //   if (
    //     laddersObj.hasOwnProperty(snakesObj[key]) ||
    //     laddersObj.hasOwnProperty(key) ||
    //     Object.values(snakesObj).includes(Number(key)) ||
    //     Object.values(laddersObj).includes(Number(key)) ||
    //     Object.values(laddersObj).includes(snakesObj[key])
    //   ) {
    //     delete snakesObj[key];
    //   }
    // }

    // for (let key in laddersObj) {
    //   if (
    //     snakesObj.hasOwnProperty(laddersObj[key]) ||
    //     snakesObj.hasOwnProperty(key) ||
    //     Object.values(laddersObj).includes(Number(key)) ||
    //     Object.values(snakesObj).includes(Number(key))
    //   ) {
    //     delete laddersObj[key];
    //   }
    // }

    console.log('snakesObj-------->', snakesObj);

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
    // console.log('PlayGameScreen-commObj------>', commObj);
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
        <TouchableWithoutFeedback
          onPress={() => {
            setCommObj(prev => ({
              ...prev,
              refresh: !prev.resizeMode,
            }));
          }}>
          <View
            style={{
              paddingVertical: 5,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontWeight: '500',
              }}>
              Refresh
            </Text>
          </View>
        </TouchableWithoutFeedback>
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
                            flexWrap: 'wrap',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            // padding: 10,
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
                                    top: 10,
                                    left: -3,
                                  }}>
                                  <PlayerCoin />
                                </View>
                              )}
                              <Image
                                style={{
                                  width:
                                    commObj.playerOneCount ==
                                      commObj.playerTwoCount ||
                                    commObj.playerOneCount ==
                                      commObj.PlayerThreeCount ||
                                    commObj.playerOneCount ==
                                      commObj.playerFourCount
                                      ? commObj.player == 'p1' && commObj.active
                                        ? 25
                                        : 10
                                      : 25,
                                  resizeMode: 'contain',
                                  height:
                                    commObj.playerOneCount ==
                                      commObj.playerTwoCount ||
                                    commObj.playerOneCount ==
                                      commObj.PlayerThreeCount ||
                                    commObj.playerOneCount ==
                                      commObj.playerFourCount
                                      ? commObj.player == 'p1' && commObj.active
                                        ? 25
                                        : 10
                                      : 25,
                                }}
                                source={require('../../../assets/images/bluekey.png')}
                              />
                              {commObj.playerOneCount ==
                                commObj.playerTwoCount ||
                              commObj.playerOneCount ==
                                commObj.PlayerThreeCount ||
                              commObj.playerOneCount ==
                                commObj.playerFourCount ? null : (
                                <View
                                  style={{
                                    width: 17,
                                    height: 6,
                                    backgroundColor: 'gray',
                                    alignSelf: 'center',
                                    borderRadius: 50,
                                  }}></View>
                              )}
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
                                    top: 10,
                                    left: -3,
                                  }}>
                                  <PlayerCoin />
                                </View>
                              )}
                              <Image
                                style={{
                                  width:
                                    commObj.playerTwoCount ==
                                      commObj.PlayerThreeCount ||
                                    commObj.playerTwoCount ==
                                      commObj.playerFourCount ||
                                    commObj.playerTwoCount ==
                                      commObj.playerOneCount
                                      ? commObj.player == 'p2' && commObj.active
                                        ? 25
                                        : 10
                                      : 25,
                                  resizeMode: 'contain',
                                  height:
                                    commObj.playerTwoCount ==
                                      commObj.PlayerThreeCount ||
                                    commObj.playerTwoCount ==
                                      commObj.playerFourCount ||
                                    commObj.playerTwoCount ==
                                      commObj.playerOneCount
                                      ? commObj.player == 'p2' && commObj.active
                                        ? 25
                                        : 10
                                      : 25,
                                }}
                                source={require('../../../assets/images/redkey.png')}
                              />
                              {commObj.playerTwoCount ==
                                commObj.PlayerThreeCount ||
                              commObj.playerTwoCount ==
                                commObj.playerFourCount ||
                              commObj.playerTwoCount ==
                                commObj.playerOneCount ? null : (
                                <View
                                  style={{
                                    width: 17,
                                    height: 6,
                                    backgroundColor: 'gray',
                                    alignSelf: 'center',
                                    borderRadius: 50,
                                  }}></View>
                              )}
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
                                    top: 10,
                                    left: -3,
                                  }}>
                                  <PlayerCoin />
                                </View>
                              )}
                              <Image
                                style={{
                                  width:
                                    commObj.PlayerThreeCount ==
                                      commObj.playerFourCount ||
                                    commObj.PlayerThreeCount ==
                                      commObj.playerOneCount ||
                                    commObj.PlayerThreeCount ==
                                      commObj.playerTwoCount
                                      ? commObj.player == 'p3' && commObj.active
                                        ? 25
                                        : 10
                                      : 25,
                                  resizeMode: 'contain',
                                  height:
                                    commObj.PlayerThreeCount ==
                                      commObj.playerFourCount ||
                                    commObj.PlayerThreeCount ==
                                      commObj.playerOneCount ||
                                    commObj.PlayerThreeCount ==
                                      commObj.playerTwoCount
                                      ? commObj.player == 'p3' && commObj.active
                                        ? 25
                                        : 10
                                      : 25,
                                }}
                                source={require('../../../assets/images/yellowkey.png')}
                              />
                              {commObj.PlayerThreeCount ==
                                commObj.playerFourCount ||
                              commObj.PlayerThreeCount ==
                                commObj.playerOneCount ||
                              commObj.PlayerThreeCount ==
                                commObj.playerTwoCount ? null : (
                                <View
                                  style={{
                                    width: 17,
                                    height: 6,
                                    backgroundColor: 'gray',
                                    alignSelf: 'center',
                                    borderRadius: 50,
                                  }}></View>
                              )}
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
                                    top: 10,
                                    left: -3,
                                  }}>
                                  <PlayerCoin />
                                </View>
                              )}
                              <Image
                                style={{
                                  width:
                                    commObj.playerFourCount ==
                                      commObj.playerOneCount ||
                                    commObj.playerFourCount ==
                                      commObj.playerTwoCount ||
                                    commObj.playerFourCount ==
                                      commObj.PlayerThreeCount
                                      ? commObj.player == 'p4' && commObj.active
                                        ? 25
                                        : 10
                                      : 25,
                                  resizeMode: 'contain',
                                  height:
                                    commObj.playerFourCount ==
                                      commObj.playerOneCount ||
                                    commObj.playerFourCount ==
                                      commObj.playerTwoCount ||
                                    commObj.playerFourCount ==
                                      commObj.PlayerThreeCount
                                      ? commObj.player == 'p4' && commObj.active
                                        ? 25
                                        : 10
                                      : 25,
                                }}
                                source={require('../../../assets/images/greenkey.png')}
                              />
                              {commObj.playerFourCount ==
                                commObj.playerOneCount ||
                              commObj.playerFourCount ==
                                commObj.playerTwoCount ||
                              commObj.playerFourCount ==
                                commObj.PlayerThreeCount ? null : (
                                <View
                                  style={{
                                    width: 17,
                                    height: 6,
                                    backgroundColor: 'gray',
                                    alignSelf: 'center',
                                    borderRadius: 50,
                                  }}></View>
                              )}
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
                            {commObj.PlayerThreeCount == null &&
                              commObj.numberOfPlayers > 2 && (
                                <View
                                  style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 10 / 2,
                                    backgroundColor: 'yellow',
                                  }}></View>
                              )}
                            {commObj.playerFourCount == null &&
                              commObj.numberOfPlayers > 3 && (
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
        {commObj.playerOneCount == 100 ||
        commObj.playerTwoCount == 100 ||
        commObj.PlayerThreeCount == 100 ||
        commObj.playerFourCount == 100 ? (
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
                    : commObj.PlayerThreeCount == 100
                    ? commObj.playerThreeName !== ''
                      ? commObj.playerThreeName
                      : 'Player 3'
                    : commObj.playerFourCount == 100
                    ? commObj.playerFourName !== ''
                      ? commObj.playerFourName
                      : 'Player 4'
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
                        PlayerThreeCount: null,
                        playerFourCount: null,
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
                          fontSize: 14,
                          lineHeight: 21,
                          color: '#000',
                        }}
                        placeholderTextColor="gray"
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
                          fontSize: 14,
                          lineHeight: 21,
                          color: '#000',
                        }}
                        placeholderTextColor="gray"
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
