import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../main/screens/HomeScreen';
import PlayGameScreen from '../main/screens/PlayGameScreen';

const GlobalStack = createNativeStackNavigator();

const GlobalStackNav = () => {
  return (
    <GlobalStack.Navigator>
      <GlobalStack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <GlobalStack.Screen
        name="play"
        component={PlayGameScreen}
        options={{headerShown: false}}
      />
    </GlobalStack.Navigator>
  );
};

export default GlobalStackNav;
