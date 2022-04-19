// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from './Components/ToDo/ToDoSlice';

const store = configureStore({
    reducer: reducer,
});

export default store;