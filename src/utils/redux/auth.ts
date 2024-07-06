import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setToken } from "./../token";

type InitialState = {
  isAuthenticated: boolean;
  userDetails: any;
};

const initialState = {
  isAuthenticated: false,
  userDetails: null,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      setToken(null);
      return initialState;
    },
    loginUser: (state, action) => {
      setToken(action.payload);
      return {
        ...state,
        isAuthenticated: true,
        userDetails: action.payload,
      };
    },
  },
});

export const { logOut, loginUser } = auth.actions;
export default auth.reducer;
