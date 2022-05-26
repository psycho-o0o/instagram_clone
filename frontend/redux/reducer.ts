import { combineReducers, AnyAction } from '@reduxjs/toolkit';

import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '../redux/store';
import home from '@/features/home/home.slice';
import login from '@/features/main/login/login.slice';
import register from '@/features/main/register/register.slice';

const rootReducer = combineReducers({
    home,
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
