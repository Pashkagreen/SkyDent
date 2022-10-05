import {combineReducers} from '@reduxjs/toolkit';

import appReducer from './app';
import userReducer from './user';

export default combineReducers({
  app: appReducer,
  user: userReducer,
});
