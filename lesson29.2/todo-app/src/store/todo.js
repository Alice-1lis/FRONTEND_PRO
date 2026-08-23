import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.todos.push(action.payload)
            },
            prepare: (text) => ({
                payload: {
                    id: nanoid(),
                    text,
                },
            }),
        },
    },
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer