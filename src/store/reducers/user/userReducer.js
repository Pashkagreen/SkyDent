const initialState = {
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  isRegistered: false,
};

const SET_USER_DATA = 'SET_USER_DATA';

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default userReducer;

export const setUserData = data => ({
  type: SET_USER_DATA,
  payload: data,
});