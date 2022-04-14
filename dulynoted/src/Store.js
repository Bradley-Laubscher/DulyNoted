import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from './Components/ToDo/ToDoSlice';

const store = configureStore({
    reducer: {
        todos: toDoReducer,
        
    }
});

export default store;