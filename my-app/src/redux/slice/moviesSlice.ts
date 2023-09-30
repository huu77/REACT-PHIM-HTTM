import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import requestApi from '../../axios';
export const listMovies = createAsyncThunk('user/getdata', async () => {
    const response = await requestApi('users/profile', 'GET', undefined)
    return response
}, undefined)