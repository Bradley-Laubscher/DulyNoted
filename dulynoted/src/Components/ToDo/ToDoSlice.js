import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
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
        UpdateTodo: (state,action) => {
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        item: action.payload.item
                    };
                }
                return todo;
            })
        },
        completeTodo: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: true
                    };
                }
                return todo;
            })
        }
    }
});

export const { addTodo, removeToDo,UpdateTodo, completeTodo } = todoSlice.actions;
// export default toDoSlice.reducer;
export const reducer = todoSlice.reducer;