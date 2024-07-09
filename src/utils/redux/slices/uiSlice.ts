// uiSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedAttributesPayload, ProductVariantAttribute } from '@/utils/types';

interface UIState {
  quantity: number;
  selectedAttributes: {
    productVariantAttributes: ProductVariantAttribute[];
  };
}

const initialState: UIState = {
  quantity: 1,
  selectedAttributes: {
    productVariantAttributes: [],
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
    setSelectedAttributes: (state, action: PayloadAction<SelectedAttributesPayload>) => {
      state.selectedAttributes.productVariantAttributes = action.payload.productVariantAttributes;
    },
  },
});

export const { setQuantity, setSelectedAttributes } = uiSlice.actions;
export default uiSlice.reducer;
