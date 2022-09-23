const initialState = {
  id: null,
};

export const SET_USER_DATA = 'SET_USER_DATA';
export const CLEAN_USER_DATA = 'CLEAN_USER_DATA';

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {...state, ...action.payload};
    case CLEAN_USER_DATA:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
