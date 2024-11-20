import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const {addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;