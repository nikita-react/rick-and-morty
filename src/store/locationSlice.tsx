import { from } from "@apollo/client";
import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  locationData: {
    count: number;
    location: any;
  };
  locationLoading: null | boolean;
  locationError: any;
};

const initialState: initialStateType = {
  locationData: {
    count: 1,
    location: {},
  },
  locationLoading: null,
  locationError: null,
};

const locationsSLice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    addLocationData(state, action) {
      state.locationData = action.payload.data;
      state.locationLoading = action.payload.loading;
      state.locationError = action.payload.error;
    },
  },
});
export const { addLocationData } = locationsSLice.actions;
export default locationsSLice.reducer;
