import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {PersistGate} from 'redux-persist/integration/react';

import {colors} from './src/utils/colors';

import RootNavigation from './src/navigation/RootNavigation';
import reduxStore from './src/store/index';

const App = () => {
  const {store, persistor} = reduxStore();

  useEffect(() => {
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
    background: colors.backgroundGrey,
  },
};
