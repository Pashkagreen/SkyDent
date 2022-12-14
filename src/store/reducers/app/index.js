import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isFirstLaunch: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setFirstLaunch(state) {
      return {
        ...state,
        isFirstLaunch: false,
      };
    },
  },
});

export default appSlice.reducer;
export const {setFirstLaunch} = appSlice.actions;
