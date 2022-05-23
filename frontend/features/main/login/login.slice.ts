import axios from 'axios';
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
            const axioxConfig = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const response = await axios.post(
                '/api/users/login',
                data,
                axioxConfig
            );
            return response?.data;
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);


const initialState: ILoginState = {
    id: '',
    pw: '',
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
        [LoginThunk.fulfilled.type] : (state, {payload :  {jwt}} : PayloadAction<ILoginThunkFulfilledProps>) => {
            localStorage.setItem('jwt', jwt);
        },
        [LoginThunk.rejected.type] : (state, {payload : {message}} : PayloadAction<ILoginThunkRejectedProps>) => {
            state.error = message
        }
    }
});

// Action creators are generated for each case reducer function
export const { changeInput } = loginSlice.actions;

export default loginSlice.reducer;
