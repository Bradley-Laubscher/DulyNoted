import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './Reducers/TodoSlice.js';
import categoriesReducer from "./Reducers/CategoriesSlice";
import appReducer from "./Reducers/AppSlice.js";

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        todos: todoReducer,
        app: appReducer,
    }
});

export default store;