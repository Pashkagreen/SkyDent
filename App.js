import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';
import SplashScreen from 'react-native-splash-screen';
import {PersistGate} from 'redux-persist/integration/react';

import {debug} from './src/services/index.js';

import {colors} from './src/utils/colors';

import RootNavigation from './src/navigation/RootNavigation';
import {persistor, store} from './src/store';

const App = () => {
  const getTokens = async () => {
    try {
      const accessToken = await EncryptedStorage.getItem('accessToken');
      const refreshToken = await EncryptedStorage.getItem('refreshToken');
      console.log(
        'access token: ',
        accessToken,
        'refresh token: ',
        refreshToken,
      );
    } catch (error) {
      debug.log('failed get tokens', error);
    }
  };

  useEffect(() => {
    SplashScreen.hide();
    getTokens();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer theme={navTheme}>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.backgroundGrey,
  },
};
