import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {Platform} from 'react-native';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';
import SplashScreen from 'react-native-splash-screen';
import {PersistGate} from 'redux-persist/integration/react';

import {debug} from './src/services/index.js';

import {colors} from './src/utils/colors';

import RootNavigation from './src/navigation/RootNavigation';
import {persistor, store} from './src/store';

import {setCustomText} from 'react-native-global-props';

const App = () => {
  // Setting default styles for all Text components.
  const customTextProps = {
    style: {
      fontFamily:
        Platform.OS === 'ios' ? 'ProductSans-Regular' : 'ProductSansRegular',
    },
  };

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
    getTokens();
    setCustomText(customTextProps);
    SplashScreen.hide();
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
    background: colors.porcelain,
  },
};
