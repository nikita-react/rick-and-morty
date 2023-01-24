import { configureStore } from "@reduxjs/toolkit";
// import slice from "./charactersSlice";

const store = configureStore({
  reducer: {},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
