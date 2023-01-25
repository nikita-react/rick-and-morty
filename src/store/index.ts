import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./charactersSlice";
import locationSlice from "./locationSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    characters: charactersSlice,
    locations: locationSlice,
    theme: themeSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
