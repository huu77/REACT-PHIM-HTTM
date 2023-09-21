
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import requestApi from '../../axios';
 

export type Role = 'user' | 'admin'
export interface User {
    name: {
        first: string,
        last: string
    },
    email: string,
    role: Role,
    username: string,
    avatar: string
}
export interface UserState {
    user: User[],
    loading: boolean,
    error: any
}
const initialState: UserState = {
    user: [],
    loading: false,
    error: null,
};

export const dataUser = createAsyncThunk('user/getdata', async () => {
    const response = await requestApi('users/profile', 'GET', undefined)
    return response
},undefined)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(dataUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(dataUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // Thay đổi users thành user
            })
            .addCase(dataUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
})

export default userSlice.reducer;