import axios from 'axios';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface ILoginApiProps {
    id: string;
    pw: string;
}

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

export interface LoginState {
    id: string;
    pw: string;
    error: null | string;
}

const initialState: LoginState = {
    id: '',
    pw: '',
    error: null,
};

interface IChangeInputPayload {
    key: 'id' | 'pw';
    value: string;
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        changeInput: (state, action: PayloadAction<IChangeInputPayload>) => {
            state[action.payload.key] = action.payload.value;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginThunk.fulfilled, (state, { payload: { jwt } }) => {
                console.log(jwt);
            })
            .addCase(LoginThunk.rejected, (state, { payload }) => {
                console.log(payload);
            });
    },
});

// Action creators are generated for each case reducer function
export const { changeInput } = loginSlice.actions;

export default loginSlice.reducer;
