import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo';
import createSagaMiddleware from "redux-saga";
import todoSaga from './todoSaga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
    middleware: (getDefaultMiggleware) =>
        getDefaultMiggleware().concat(sagaMiddleware),
});

sagaMiddleware.run(todoSaga);