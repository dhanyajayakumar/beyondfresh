// productSlice.ts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productDetailsApi } from "@/api/apiService";

// Define the initial state interface
interface ProductState {
  data: any; // Adjust this type as per your API response structure
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: ProductState = {
  data: null,
  loading: false,
  error: null,
};

// Define async thunk action creator
export const fetchProductDetails = createAsyncThunk(
  'product/fetchProductDetails',
  async ({ query, param }: { query: string; param: any }, thunkAPI) => {
    console.log("Ashik")
    try {
      const response = await productDetailsApi(query, param);
      console.log(response);
      return response?.requestedData?.product;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Create slice
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // Add reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Assuming payload is a string error message
      });
  },
});

export default productSlice.reducer;
