import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const getAllCharactersThunk = createAsyncThunk<
  any,
  string,
  { rejectValue: string }
>("characters/getAllCharactersThunk", async function (id, { rejectWithValue }) {
  const response = await api.characters.getCharacters(id);

  if (response.error) {
    return rejectWithValue("error server");
  }

  return response;
});

type charactersType = {
  charactersData: {};
  loading: null | boolean;
  error: any;
};
const initialState: charactersType = {
  charactersData: {},
  loading: null,
  error: null,
};
const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCharactersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCharactersThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.charactersData = action.payload;
      })
      .addCase(getAllCharactersThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = null;
      });
  },
});

export default charactersSlice.reducer;
