import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const getAllLocationsThunk = createAsyncThunk<
  {},
  undefined,
  { rejectValue: string }
>("locations/getAllLocationsThunk", async function (_, { rejectWithValue }) {
  const response = await api.locations.getLocations();
  if (response.error) {
  }
  return response;
});

type initialStateType = {
  locationData: {};
  loading: null | boolean;
  error: any;
};

const initialState: initialStateType = {
  locationData: {},
  loading: null,
  error: null,
};

const locationsSLice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllLocationsThunk.pending, (state) => {
        state.loading = true;
        state.error;
      })
      .addCase(getAllLocationsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.locationData = action.payload;
      })
      .addCase(getAllLocationsThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = null;
      });
  },
});

export default locationsSLice.reducer;
