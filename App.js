import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {PersistGate} from 'redux-persist/integration/react';

import {colors} from './src/utils/colors';

import RootNavigation from './src/navigation/RootNavigation';
import reduxStore from './src/store/index';
import AuthService from './src/services/auth';

const App = () => {
  const {store, persistor} = reduxStore();

  const getTokens = async () => {
    const accessToken = await AuthService.getAccessTokenFromStorage();
    const refreshToken = await AuthService.getRefreshTokenFromStorage();
    console.log('access token: ', accessToken, 'refresh token: ', refreshToken);
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
