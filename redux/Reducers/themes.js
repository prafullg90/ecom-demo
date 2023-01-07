import { createSlice } from '@reduxjs/toolkit';
const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    palette: {
      mode: 'light',
    },
  },
  reducers: {
    themeToggled(state, action) {
      state.palette.mode == 'dark'
        ? (state.palette.mode = 'light')
        : (state.palette.mode = 'dark');
    },
  },
});

export const { themeToggled } = themeSlice.actions;
export default themeSlice.reducer;
