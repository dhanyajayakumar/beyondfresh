import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setToken } from "./../token";

type InitialState = {
  isAuthenticated: boolean;
  userDetails: any;
  loader:boolean
};

const initialState = {
  isAuthenticated: false,
  userDetails: null,
  loader: true
} as InitialState;

const auth = createSlice({
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
        loader: false,
      };
    },
    setAuthState: (state, action) => {
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        userDetails: action.payload.userDetails,
        loader: false,
      };
    },
  },
});

export const { logOut, loginUser,setAuthState } = auth.actions;
export default auth.reducer;
