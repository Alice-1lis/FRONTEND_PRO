import { configureStore } from '@reduxjs/toolkit';
import swapiReducer from './swapi';
import todoReducer from './todo';

export const store = configureStore({
    reducer: {
        swapi: swapiReducer,
        todo: todoReducer,
    },
});