import React, {useEffect} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {Colors} from './src/utils/colors';

import SplashScreen from 'react-native-splash-screen';
import {Provider, useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import reduxStore from './src/store/index';
import RootNavigation from './src/navigation/RootNavigation';

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
    background: Colors.backgroundGrey,
  },
};
