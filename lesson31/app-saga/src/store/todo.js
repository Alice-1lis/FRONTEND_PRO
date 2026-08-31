import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchTodos: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTodosSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchTodosFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTodo: (state) => {
      state.loading = true;
    },
    addTodoSuccess: (state, action) => {
      state.loading = false;
      state.items.push(action.payload);
    },
    addTodoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteTodo: (state) => {
      state.loading = true;
    },
    deleteTodoSuccess: (state, action) => {
      state.loading = false;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    deleteTodoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    toggleTodo: () => { },
    toggleTodoSuccess: (state, action) => {
      const todo = state.items.find((item) => item.id === action.payload.id);
      if (todo) todo.completed = action.payload.completed;
    },
    toggleTodoFailure: (state, action) => {
      state.error = action.payload;
    },
    editTodo: () => { },
    editTodoSuccess: (state, action) => {
      const todo = state.items.find((item) => item.id === action.payload.id);
      if (todo) todo.text = action.payload.text;
    },
    editTodoFailure: (state, action) => {
      state.error = action.payload;
    },
    clearTodos: (state) => {
      state.loading = true;
    },
    clearTodosSuccess: (state) => {
      state.loading = false;
      state.items = [];
    },
    clearTodosFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchTodos, fetchTodosSuccess, fetchTodosFailure,
  addTodo, addTodoSuccess, addTodoFailure,
  deleteTodo, deleteTodoSuccess, deleteTodoFailure,
  toggleTodo, toggleTodoSuccess, toggleTodoFailure,
  editTodo, editTodoSuccess, editTodoFailure,
  clearTodos, clearTodosSuccess, clearTodosFailure,
} = todoSlice.actions;

export default todoSlice.reducer;