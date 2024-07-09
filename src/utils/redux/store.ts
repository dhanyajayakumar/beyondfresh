import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import productReducer from './slices/productSlice';
import uiReducer from './slices/uiSlice';
import cartReducer from './slices/cartSlice';
import authMiddleware from "./authMiddleware";

export const store = configureStore({
  reducer: {
    auth,
    product: productReducer,
    ui: uiReducer,
    cart: cartReducer,


  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),

});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
