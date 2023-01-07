import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Reducers/themes';
import productReducer from './Reducers/products';
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productReducer,
  },
});
