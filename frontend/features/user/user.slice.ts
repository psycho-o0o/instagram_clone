import axiosInstance from '@/utils/axios';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  IUserState,
  ILoginApiProps,
  ILogoutApiProps,
  IRegisterApiProps,
  ICheckApiProps,
  IUserThunkFulfilledProps,
  IUserThunkRejectedProps,
} from './user.interface';

export const LoginApi = createAsyncThunk(
  'user/loginApi',
  async (data: ILoginApiProps, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/api/users/login', data);
      return response?.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const LogoutApi = createAsyncThunk(
  'user/logoutApi',
  async (_, { rejectWithValue }) => {
    try {
      const data = localStorage.getItem('jwt');
      const response = await axiosInstance.post('/api/users/logout', data);
      return response?.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const RegisterApi = createAsyncThunk(
  'user/registerApi',
  async (data: IRegisterApiProps, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/api/users/register', data);
      return response?.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const CheckApi = createAsyncThunk(
  'user/checkApi',
  async (data: ICheckApiProps, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/api/users/check', data);
      return response?.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState: IUserState = {
  isLogin: false,
  loading: true,
  error: null,
};

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers: {
    [LoginApi.pending.type]: (state) => {
      state.error = null;
      state.loading = true;
    },
    [LoginApi.fulfilled.type]: (
      state,
      { payload: { jwt } }: PayloadAction<IUserThunkFulfilledProps>
    ) => {
      state.isLogin = true;
      state.loading = false;
      localStorage.setItem('jwt', jwt);
    },
    [LoginApi.rejected.type]: (
      state,
      { payload: { message } }: PayloadAction<IUserThunkRejectedProps>
    ) => {
      state.error = message;
      state.loading = false;
      state.isLogin = false;
    },
    [RegisterApi.pending.type]: (state) => {
      state.error = null;
      state.loading = true;
    },
    [RegisterApi.fulfilled.type]: (
      state,
      { payload: { jwt } }: PayloadAction<IUserThunkFulfilledProps>
    ) => {
      state.isLogin = true;
      state.loading = false;
      localStorage.setItem('jwt', jwt);
    },
    [RegisterApi.rejected.type]: (
      state,
      { payload: { message } }: PayloadAction<IUserThunkRejectedProps>
    ) => {
      state.error = message;
      state.loading = false;
      state.isLogin = false;
    },
    [CheckApi.pending.type]: (state) => {
      state.error = null;
      state.loading = true;
    },
    [CheckApi.fulfilled.type]: (state) => {
      state.isLogin = true;
      state.loading = false;
    },
    [CheckApi.rejected.type]: (
      state,
      { payload: { message } }: PayloadAction<IUserThunkRejectedProps>
    ) => {
      state.error = message;
      state.isLogin = false;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export default UserSlice.reducer;
