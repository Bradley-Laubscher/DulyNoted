import { configureStore } from "@reduxjs/toolkit";
import noteReducer from './Reducers/NoteSlice.js';
import categoriesReducer from "./Reducers/CategoriesSlice";
import appReducer from "./Reducers/AppSlice.js";

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        notes: noteReducer,
        app: appReducer,
    }
});

export default store;