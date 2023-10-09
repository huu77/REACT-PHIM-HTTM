// genresSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import requestApi from '../../axios';

interface TypeInit{
    items:any,
    isLoading:boolean
}
// Define an initial state
const initialState:TypeInit = {
  items: [],
  isLoading: false,
};

// Create an async thunk action to fetch genres
export const fetchGenres = createAsyncThunk('genres/fetchGenres', async () => {
    const response = await requestApi("genres", "GET", undefined);
    console.log("kaubviuabdv",response);
    
  return response;
});

// Create a genres slice
const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchGenres.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default genresSlice.reducer;
