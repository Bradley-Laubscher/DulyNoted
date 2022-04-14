import { createSlice } from '@reduxjs/toolkit';

const toDoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
            return state;
        }
    }
});

export const { addTodo } = toDoSlice.actions;
export default toDoSlice.reducer;