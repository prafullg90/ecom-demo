import { createSlice } from '@reduxjs/toolkit';
const productSlice = createSlice({
  name: 'products',
  initialState: { products: [], carts: {} },
  reducers: {
    productList(state, action) {
      // "Mutate" the existing state, no return value needed
      console.log(state, action.payload);
      state.products = [...action.payload];
    },
    addCart(state, action) {
      // "Mutate" the existing state, no return value needed

      if (state.carts[action.payload]) {
        state.carts[action.payload] = state.carts[action.payload] + 1;
      } else {
        state.carts[action.payload] = 1;
      }
    },
    incrementQuantity(state, action) {
      if (state.carts[action.payload]) {
        state.carts[action.payload] = state.carts[action.payload] + 1;
      } else {
        state.carts[action.payload] = 1;
      }
    },
    decrementQuantity(state, action) {
      if (state.carts[action.payload]) {
        state.carts[action.payload] = state.carts[action.payload] - 1;
      } else {
        state.carts[action.payload] = 0;
      }
    },
  },
});

export const { productList, addCart, incrementQuantity, decrementQuantity } =
  productSlice.actions;
export default productSlice.reducer;
