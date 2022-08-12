import { createSlice } from "@reduxjs/toolkit";

const initialStateSetup = {
  currentUser: null,
  isFetching: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: { ...initialStateSetup },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state, action) => {
      return initialStateSetup;
    },
  },
});

export default userSlice.reducer;
export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;
