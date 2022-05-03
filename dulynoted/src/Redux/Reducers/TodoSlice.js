import { createSlice } from '@reduxjs/toolkit';

const todoReducer = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {

        addTodos: (state, action) => {
            let localState = [...state];
            localState.push(action.payload);
            return localState;
        },

        removeTodos: (state,action) => {
            return state.filter((item) => item.id !== action.payload)
        },

        updateTodos: (state, action) => {
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

        completeTodos: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: true,
                    };
                }   
                return todo;
            })
        },
    }
});

export const { addTodos, removeTodos, updateTodos, completeTodos } = todoReducer.actions;
export default todoReducer.reducer;
