
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import requestApi from '../../axios';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_SOME_KEY
import { produce } from 'immer';
// interface
export type Role = 'user' | 'admin'
export interface User {
    _id: string,
    name: {
        first: string,
        last: string
    },
    email: string,
    role: Role,
    username: string,
    avatar: string,
    _v: number
}
export interface UserState {
    user: User,
    loading: boolean,
    error: any
}

export interface UpdateAvatarUSer {
    file: File,
    user: User,
    token: string
}
export interface UpdateUser {
    user: User,
    formData: any
}

const initialState: UserState = {
    user:
    {
        _id: "",
        name: {
            first: "",
            last: ""
        },
        email: "",
        role: 'user',
        username: "",
        avatar: "",
        _v: 0
    }
    ,
    loading: false,
    error: null,
};
//  some handle createAsyncThunk
export const dataUser = createAsyncThunk('user/getdata', async () => {
    const response = await requestApi('users/profile', 'GET', undefined)
    return response
}, undefined)

// funtion handle img and call api return data
const updateImageOnServer = async ({ file, user, token }: UpdateAvatarUSer) => {
    try {
        if (!file) {
            throw new Error('Chưa chọn hình ảnh.');
        }

        const formData = new FormData();
        formData.append('avatar', file);

        // Gửi yêu cầu PUT đến API cập nhật hình ảnh
        const response = await axios.put(`${apiUrl}/users/${user._id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
        });

        // Xử lý phản hồi từ máy chủ (response.data) nếu cần
        return response.data; // Trả về dữ liệu phản hồi từ máy chủ
    } catch (error) {
        throw error;
    }
};

// Sử dụng createAsyncThunk để tạo action cập nhật hình ảnh
export const updateUserAvatar = createAsyncThunk(
    'user/updateAvatar', // Tên action
    async ({ file, user, token }: UpdateAvatarUSer, { rejectWithValue }) => {
        try {
            const data = await updateImageOnServer({ file, user, token });
            return data; // Trả về dữ liệu phản hồi từ máy chủ
        } catch (error: any) {
            // Sử dụng rejectWithValue để trả về lỗi nếu có lỗi xảy ra
            return rejectWithValue(error.message);
        }
    }
);

export const updateUser = createAsyncThunk(
    'user/updateUser', // Tên action
    async ({ user, formData }: UpdateUser, { rejectWithValue }) => {
        try {
            const data = await requestApi(`users/${user._id}`, 'PUT', formData,'json')
            return data; // Trả về dữ liệu phản hồi từ máy chủ
        } catch (error: any) {
            // Sử dụng rejectWithValue để trả về lỗi nếu có lỗi xảy ra
            return rejectWithValue(error.message);
        }
    }
);
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
                state.user = action.payload;
            })
            .addCase(dataUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateUserAvatar.fulfilled, (state, action) => {

                const UserNew = action.payload.userNew;
                state.user.avatar = UserNew.avatar;
 
            });
    },
})

export default userSlice.reducer;