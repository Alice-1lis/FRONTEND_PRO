import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todoReducer from "./todo/todoSlice";
import swapiReducer from "./swapi/swapiSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    swapi: swapiReducer,
  },
  // thunk потрібен для createAsyncThunk (swapi), saga - для todo. Працюють разом.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);