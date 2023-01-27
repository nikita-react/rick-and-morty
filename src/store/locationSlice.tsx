import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const getAllLocationThunk = createAsyncThunk<
  {},
  undefined,
  { rejectValue: string }
>("locations/getAllLocationThunk", async function (_, { rejectWithValue }) {
  const response = await api.locations.getLocations();
  if (response.error) {
    return rejectWithValue(response.error);
  }
  return response;
});

export const getLocationThunk = createAsyncThunk<
  {},
  string,
  { rejectValue: string }
>("locations/getLocationThunk", async function (id, { rejectWithValue }) {
  const response = await api.locations.getOneLocation(id);
  if (response.error) {
    return rejectWithValue(response.error);
  }
  return response;
});

type initialStateType = {
  locationData: {};
  oneLocationData: {};
  loading: null | boolean;
  error: any;
  oneLocationLoading: null | boolean;
  oneLocationError: any;
};

const initialState: initialStateType = {
  locationData: {},
  oneLocationData: {},
  loading: null,
  error: null,
  oneLocationLoading: null,
  oneLocationError: null,
};

const locationsSLice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllLocationThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllLocationThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.locationData = action.payload;
      })
      .addCase(getAllLocationThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = null;
      })
      .addCase(getLocationThunk.pending, (state) => {
        state.oneLocationLoading = true;
        state.oneLocationError = null;
      })
      .addCase(getLocationThunk.fulfilled, (state, action) => {
        state.oneLocationLoading = false;
        state.oneLocationData = action.payload;
      })
      .addCase(getLocationThunk.rejected, (state, action) => {
        state.oneLocationError = action.payload;
        state.oneLocationLoading = null;
      });
  },
});

export default locationsSLice.reducer;
