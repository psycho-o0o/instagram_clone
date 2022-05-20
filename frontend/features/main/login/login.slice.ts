import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi } from './login.api';

export interface LoginState {
    id: string;
    pw: string;
}

const initialState: LoginState = {
    id: '',
    pw: '',
};

export const LoginThunk = createAsyncThunk(
    "login/loginApi",
    loginApi
)

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
        builder.addCase(LoginThunk.fulfilled, (state, action) => {
            console.log(action);
        })
    }
});

// Action creators are generated for each case reducer function
export const { changeInput } = loginSlice.actions;

export default loginSlice.reducer;
