import axiosInstance from '@/utils/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface ICheckJWTProps {
    jwt : string;
}

interface IHomeState {
    error : string;
    loading : boolean;
    isLogin : boolean;
}

export const CheckJWT = createAsyncThunk(
    'home/checkJWT',
    async (data : ICheckJWTProps, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.post('/api/users/check', data);
            return response?.data;
        } catch(err : any) {
            return rejectWithValue(err.response.data);
        }
    }
)

const initialState: IHomeState = {
    error : '',
    loading: false,
    isLogin : false,
}

export const homeSlice = createSlice({
    name : 'home',
    initialState,
    reducers : {

    },
    extraReducers : {
        [CheckJWT.pending.type] : (state) => {
            state.error = '';
            state.loading = true;
            state.isLogin = false;
        },
        [CheckJWT.fulfilled.type] : (state) => {
            state.loading = false;
            state.isLogin = true;
        },
        [CheckJWT.rejected.type] : (state, {payload}) => {
            state.error = payload.message;
            state.loading = false;
            state.isLogin = false;
        }
    }
})

export default homeSlice.reducer;