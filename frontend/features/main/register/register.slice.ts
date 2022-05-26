import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    IRegisterState,
    IChangeInputPayload,
} from './register.interface';

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
});

// Action creators are generated for each case reducer function
export const { changeInput } = registerSlice.actions;

export default registerSlice.reducer;
