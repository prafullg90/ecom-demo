import { createSlice } from '@reduxjs/toolkit';
const productSlice = createSlice({
  name: 'products',
  initialState: { products: [] },
  reducers: {
    productList(state, action) {
      // "Mutate" the existing state, no return value needed
      console.log(state, action.payload);
      state.products = [...action.payload];
    },
    addCart(state, action) {
      // "Mutate" the existing state, no return value needed
      state = state;
    },
    updateQunatityIncart(state, action) {
      // "Mutate" the existing state, no return value needed
      state.push(action.payload);
    },
    removeCart(state, action) {
      // "Mutate" the existing state, no return value needed
      state.push(action.payload);
    },
  },
});

export const { productList, addCart, updateQunatityIncart, removeCart } =
  productSlice.actions;
export default productSlice.reducer;
