import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        items: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id: Date.now(),
                text: action.payload,
                done: false,
            });
        },
        toggleTodo: (state, action) => {
            const todo = state.items.find((item) => item.id === action.payload);
            if (todo) todo.done = !todo.done;
        },
        clearTodos: (state) => {
            state.items = [];
        },
    },
});

export const { addTodo, toggleTodo, clearTodos } = todoSlice.actions;
export default todoSlice.reducer;