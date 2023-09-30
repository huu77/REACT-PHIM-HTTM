import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import requestApi from "../../axios";
export const listMovies = createAsyncThunk(
  "movies",
  async () => {
    const response = await requestApi("movies", "GET", undefined);
    return response;
  },
  undefined
);

interface Init{
    movies:[],
    loading:boolean,
    error:any
}
const initialState:Init = {
    movies:[]
    ,
    loading: false,
    error: null,
};
const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(listMovies.pending,(state)=>{
            state.loading = true;
            state.movies=[];
        })
        .addCase(listMovies.fulfilled,(state,action)=>{
            state.loading = false;
            state.movies=action.payload as any;
            state.error = null;
 
        })
        .addCase(listMovies.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
});


export default moviesSlice.reducer;