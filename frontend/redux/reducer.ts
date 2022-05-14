import { combineReducers, AnyAction } from '@reduxjs/toolkit';

import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '../redux/store';
import loginReducer from '@/features/login/login.slice';

const rootReducer = combineReducers({
    loginReducer,
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
