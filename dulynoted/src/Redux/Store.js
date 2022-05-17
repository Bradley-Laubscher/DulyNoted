import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './Reducers/TodoSlice.js';
import categoriesReducer from "./Reducers/CategoriesSlice";
// import AppReducer from "./Reducers/AppSlice.js";

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        todos: todoReducer,
        // app: AppReducer,
    }
});

export default store;