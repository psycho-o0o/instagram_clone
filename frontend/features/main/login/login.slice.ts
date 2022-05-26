import axiosInstance from '@/utils/axios';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
    ILoginState,
    IChangeInputPayload,
    ILoginApiProps,
    ILoginThunkFulfilledProps,
    ILoginThunkRejectedProps,
} from './login.interface';

export const LoginThunk = createAsyncThunk(
    'login/loginApi',
    async (data: ILoginApiProps, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/api/users/login', data);
            return response?.data;
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);

const initialState: ILoginState = {
    id: '',
    pw: '',
    isLogin : false,
    error: null,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        changeInput: (state, action: PayloadAction<IChangeInputPayload>) => {
            state[action.payload.key] = action.payload.value;
        },
    },
    extraReducers: {
        [LoginThunk.pending.type]: (state) => {
            state.error = null;
        },
        [LoginThunk.fulfilled.type]: (
            state,
            { payload: { jwt } }: PayloadAction<ILoginThunkFulfilledProps>
        ) => {
            state.isLogin = true;
            localStorage.setItem('jwt', jwt);
        },
        [LoginThunk.rejected.type]: (
            state,
            { payload: { message } }: PayloadAction<ILoginThunkRejectedProps>
        ) => {
            state.error = message;
            state.isLogin = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeInput } = loginSlice.actions;

export default loginSlice.reducer;
