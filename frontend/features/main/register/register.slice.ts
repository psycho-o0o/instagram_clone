import axiosInstance from '@/utils/axios';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
    IRegisterState,
    IChangeInputPayload,
    IRegisterApiProps,
    IRegisterThunkFulfilledProps,
    IRegisterThunkRejectedProps,
} from './register.interface';

export const RegisterThunk = createAsyncThunk(
    'register/regiserApi',
    async (data: IRegisterApiProps, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post(
                '/api/users/register',
                data
            );
            return response?.data;
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);

const initialState: IRegisterState = {
    id: '',
    name: '',
    nickName: '',
    pw: '',
    error: null,
};

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        changeInput: (state, action: PayloadAction<IChangeInputPayload>) => {
            state[action.payload.key] = action.payload.value;
        },
    },
    extraReducers: {
        [RegisterThunk.pending.type]: (state) => {
            state.error = null;
        },
        [RegisterThunk.fulfilled.type]: (
            state,
            { payload: { jwt } }: PayloadAction<IRegisterThunkFulfilledProps>
        ) => {
            localStorage.setItem('jwt', jwt);
        },
        [RegisterThunk.rejected.type]: (
            state,
            { payload: { message } }: PayloadAction<IRegisterThunkRejectedProps>
        ) => {
            state.error = message;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeInput } = registerSlice.actions;

export default registerSlice.reducer;
