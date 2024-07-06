import { createSlice, createAsyncThunk, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { addToCart as addToCartApi, updateCart as updateCartApi, deleteCart as deleteCartApi, getCart as getCartApi } from '@/api/apiService';
import { apiAddToCartData, apiUpdateCartData, apiDeleteCartData } from '@/utils/types';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CartState = {
  items: [],
  status: 'idle',
  error: null,
};

export const addToCartAsync = createAsyncThunk(
  'cart/addToCart',
  async (userData: apiAddToCartData) => {
    const response = await addToCartApi(userData);
    return response;
  }
);

export const updateCartAsync = createAsyncThunk(
  'cart/updateCart',
  async (userData: apiUpdateCartData) => {
    const response = await updateCartApi(userData);
    return response;
  }
);

export const deleteCartAsync = createAsyncThunk(
  'cart/deleteCart',
  async (userData: apiDeleteCartData) => {
    const response = await deleteCartApi(userData);
    return response;
  }
);

export const getCartAsync = createAsyncThunk(
  'cart/getCart',
  async (params: any) => {
    const response = await getCartApi(params);
    return response;
  }
);

// export const selectCartTotalQuantity = createSelector(
//   (state: { cart: CartState }) => state.cart.items || [], // Ensure items are always an array
//   (items) => items.reduce((total, item) => total + item.quantity, 0)
// );

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // No local reducers needed for async operations if handled in extraReducers
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCartAsync.fulfilled, (state, action: PayloadAction<CartItem>) => {
        state.status = 'succeeded';
        state.items.push(action.payload); // Assuming action.payload is a CartItem object
      })
      .addCase(addToCartAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to add to cart';
      })
      .addCase(updateCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCartAsync.fulfilled, (state, action: PayloadAction<CartItem>) => {
        state.status = 'succeeded';
        const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
        if (itemIndex >= 0) {
          state.items[itemIndex] = action.payload;
        }
      })
      .addCase(updateCartAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to update cart';
      })
      .addCase(deleteCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteCartAsync.fulfilled, (state, action: PayloadAction<{ id: string }>) => {
        state.status = 'succeeded';
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteCartAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to delete from cart';
      })
      .addCase(getCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCartAsync.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
        state.status = 'succeeded';
        state.items = action.payload; // Assuming action.payload is an array of CartItem objects
      })
      .addCase(getCartAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch cart';
      });
  },
});

export default cartSlice.reducer;
