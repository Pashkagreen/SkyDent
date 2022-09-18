const initialState = {
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  isRegistered: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
