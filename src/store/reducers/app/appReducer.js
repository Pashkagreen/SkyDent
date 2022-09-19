const initialState = {
  isFirstLaunch: true,
};

const FIRST_LAUNCH = 'FIRST_LAUNCH';

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_LAUNCH:
      return {...state, isFirstLaunch: false};
    default:
      return state;
  }
};

export default appReducer;

