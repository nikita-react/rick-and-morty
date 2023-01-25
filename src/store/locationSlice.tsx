import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const getAllLocationsThunk = createAsyncThunk<
  {},
  string,
  { rejectValue: string }
>("locations/getAllLocationsThunk", async function (id, { rejectWithValue }) {
  const response = await api.locations.getOneLocation(id);
  if (response.error) {
    return rejectWithValue(response.error);
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
        state.error = null;
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
