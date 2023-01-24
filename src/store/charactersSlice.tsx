import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const getAllCharactersThunk = createAsyncThunk<
  any,
  string,
  { rejectValue: string }
>(
  "characters/getAllCharactersThunk",
  async function (pageNumber, { rejectWithValue }) {
    const response = await api.characters.getCharacters(pageNumber);
    if (!response.ok) {
      return rejectWithValue("error server");
    }
    const data = await response.json();
    return data;
  }
);

type charactersType = {
  characters: {};
  status: null | string;
  error: any;
};
const initialState: charactersType = {
  characters: {},
  status: null,
  error: null,
};
const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCharactersThunk.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAllCharactersThunk.fulfilled, (state, action) => {
        state.status = "loaded";
        state.characters = action.payload;
      })
      .addCase(getAllCharactersThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export default charactersSlice.reducer;
