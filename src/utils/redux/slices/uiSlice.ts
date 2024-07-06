// uiSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  selectedAttributes: any[]; // Ensure selectedAttributes is initialized as an array or appropriate initial state
  quantity: number;
}

const initialState: UIState = {
  selectedAttributes: [],
  quantity: 0,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSelectedAttributes(state, action: PayloadAction<any[]>) {
      state.selectedAttributes = action.payload;
    },
    setQuantity(state, action: PayloadAction<number>) {
      state.quantity = action.payload;
    },
  },
});

export const { setSelectedAttributes, setQuantity } = uiSlice.actions;

export default uiSlice.reducer;
