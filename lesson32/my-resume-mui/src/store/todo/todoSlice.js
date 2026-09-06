import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    fetchTodos(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTodosSuccess(state, action) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchTodosFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    addTodo(state) {
      state.error = null;
    },
    addTodoSuccess(state, action) {
      state.items.push(action.payload);
    },
    addTodoFailure(state, action) {
      state.error = action.payload;
    },

    deleteTodo(state) {
      state.error = null;
    },
    deleteTodoSuccess(state, action) {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
    deleteTodoFailure(state, action) {
      state.error = action.payload;
    },

    toggleTodo(state) {
      state.error = null;
    },
    toggleTodoSuccess(state, action) {
      const { id, completed } = action.payload;
      const todo = state.items.find((t) => t.id === id);
      if (todo) todo.completed = completed;
    },
    toggleTodoFailure(state, action) {
      state.error = action.payload;
    },

    editTodo(state) {
      state.error = null;
    },
    editTodoSuccess(state, action) {
      const { id, text } = action.payload;
      const todo = state.items.find((t) => t.id === id);
      if (todo) todo.text = text;
    },
    editTodoFailure(state, action) {
      state.error = action.payload;
    },

    clearTodos(state) {
      state.error = null;
    },
    clearTodosSuccess(state) {
      state.items = [];
    },
    clearTodosFailure(state, action) {
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