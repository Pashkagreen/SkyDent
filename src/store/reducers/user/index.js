import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },

    clearUserData() {
      return initialState;
    },
  },
});

export default userSlice.reducer;
export const {setUserData, clearUserData} = userSlice.actions;
