import { createSlice } from "@reduxjs/toolkit";

// type ThemeType = {
//   default: string;
// };

// const initialState: ThemeType = {
//   default: "light",
// };
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    default: "light",
  },
  reducers: {
    changeTheme(state, action) {
      state.default = action.payload;
    },
  },
});

export default themeSlice.reducer;

export const { changeTheme } = themeSlice.actions;
