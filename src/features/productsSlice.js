import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: null,
  error: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    // console.log("data", data);
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsFetch.pending, (state, action) => {
      state.status === "pending";
      state.items = action.payload;
    });
    builder.addCase(productsFetch.fulfilled, (state, action) => {
      state.status === "success";
      state.items = action.payload;
    });
    builder.addCase(productsFetch.rejected, (state, action) => {
      state.status === "rejected";
      state.items = action.payload;
    });
  },
});
export default productsSlice.reducer;
