import { configureStore } from '@reduxjs/toolkit'
import cardReducer from '../features/CardSlice';
import userReducer from '../features/UserSlice';

export const store = configureStore({
    reducer: {
        card: cardReducer,
        user: userReducer
    },
});