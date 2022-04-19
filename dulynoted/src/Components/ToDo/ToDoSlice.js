import { createSlice } from '@reduxjs/toolkit';

const toDoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const { id, text } = action.payload
            state.push({ id, text, completed: false})  
        },
        removeToDo: (state,action) => {
            return state.filter(todo => todo.id !== action.payload.id)
        },
    }
});

export const { addTodo, removeToDo } = toDoSlice.actions;
export default toDoSlice.reducer;