import { combineReducers, AnyAction } from '@reduxjs/toolkit';

import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '../redux/store';
import user from '@/features/user/user.slice';
import login from '@/features/main/login/login.slice';
import register from '@/features/main/register/register.slice';

const rootReducer = combineReducers({
    user,
    login,
    register,
});

export const reducer = (state: AppState, action: AnyAction) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload,
        };
    }
    return rootReducer(state, action);
};

export default rootReducer;
