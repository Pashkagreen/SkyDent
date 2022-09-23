import {SET_USER_DATA, CLEAN_USER_DATA} from '../../reducers/user/userReducer';

export const setUserData = data => ({
  type: SET_USER_DATA,
  payload: data,
});

export const cleanUserData = () => ({
  type: CLEAN_USER_DATA,
});
