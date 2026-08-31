import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import { fetchTodosApi, addTodoApi, updateTodoApi, deleteTodoApi, } from '../api/todoApi';
import {
  fetchTodos, fetchTodosSuccess, fetchTodosFailure, addTodo, addTodoSuccess, addTodoFailure,
  deleteTodo, deleteTodoSuccess, deleteTodoFailure, toggleTodo, toggleTodoSuccess, toggleTodoFailure,
  editTodo, editTodoSuccess, editTodoFailure, clearTodos, clearTodosSuccess, clearTodosFailure,
} from './todo';

const normalize = (item) => ({
  id: item.id,
  text: item.title ?? item.text,
  completed: item.completed ?? false,
});
function* fetchTodosWorker() {
  try {
    const data = yield call(fetchTodosApi);
    yield put(fetchTodosSuccess(data.map(normalize)));
  } catch (e) {
    yield put(fetchTodosFailure(e.message));
  }
}
function* addTodoWorker(action) {
  try {
    const data = yield call(addTodoApi, { title: action.payload, completed: false });
    yield put(addTodoSuccess(normalize(data)));
  } catch (e) {
    yield put(addTodoFailure(e.message));
  }
}
function* deleteTodoWorker(action) {
  try {
    yield call(deleteTodoApi, action.payload);
    yield put(deleteTodoSuccess(action.payload));
  } catch (e) {
    yield put(deleteTodoFailure(e.message));
  }
}
function* toggleTodoWorker(action) {
  try {
    const id = action.payload;
    const items = yield select((state) => state.todo.items);
    const current = items.find((t) => t.id === id);
    const completed = !current.completed;

    yield call(updateTodoApi, { id, completed });
    yield put(toggleTodoSuccess({ id, completed }));
  } catch (e) {
    yield put(toggleTodoFailure(e.message));
  }
}
function* editTodoWorker(action) {
  try {
    const { id, text } = action.payload;
    yield call(updateTodoApi, { id, title: text });
    yield put(editTodoSuccess({ id, text }));
  } catch (e) {
    yield put(editTodoFailure(e.message));
  }
}
function* clearTodosWorker() {
  try {
    const items = yield select((state) => state.todo.items);
    for (const todo of items) {
      yield call(deleteTodoApi, todo.id);
    }
    yield put(clearTodosSuccess());
  } catch (e) {
    yield put(clearTodosFailure(e.message));
  }
}

export default function* todoSaga() {
  yield takeLatest(fetchTodos.type, fetchTodosWorker);
  yield takeEvery(addTodo.type, addTodoWorker);
  yield takeEvery(deleteTodo.type, deleteTodoWorker);
  yield takeEvery(toggleTodo.type, toggleTodoWorker);
  yield takeEvery(editTodo.type, editTodoWorker);
  yield takeLatest(clearTodos.type, clearTodosWorker);
}