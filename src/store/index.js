import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {logger} from 'redux-logger/src';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

import appReducer from './reducers/app/appReducer';
import userReducer from './reducers/user/userReducer';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
  let persistor = persistStore(store);
  return {store, persistor};
};
