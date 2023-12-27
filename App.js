import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import GlobalStackNav from './scr/navigations/global-stack-nav';
import {PermissionsAndroid, Platform} from 'react-native';

if (Platform.OS === 'android') {
  let permissions = [
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  ];

  PermissionsAndroid.requestMultiple(permissions).then(res => {
    console.log('PermissionsAndroid--->', res);
  });
}
const App = () => {
  return (
    <NavigationContainer>
      <GlobalStackNav />
    </NavigationContainer>
  );
};

export default App;
