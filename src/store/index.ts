import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./charactersSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    characters: charactersSlice,
    theme: themeSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
