import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import posterReducer from './posterSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    poster: posterReducer,
  },
});