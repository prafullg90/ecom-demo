import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Reducers/themes';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
