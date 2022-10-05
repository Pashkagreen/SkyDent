import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';

import reducer from './reducers';

const persistConfig = {
  key: 'root',
  blacklist: [],
  storage: AsyncStorage,
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(logger),
});

export const persistor = persistStore(store);
