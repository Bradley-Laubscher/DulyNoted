import { configureStore } from "@reduxjs/toolkit";
import { reducer } from './Components/ToDo/ToDoSlice.js';

const store = configureStore({
    reducer: reducer,
});

export default store;