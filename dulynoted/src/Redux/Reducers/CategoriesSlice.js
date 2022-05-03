import { createSlice } from '@reduxjs/toolkit';

const categoriesReducer = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {

        addCategories: (state, action) => {
            let localState = [...state];
            localState.push(action.payload);
            return localState;
        },

        removeCategories: (state, action) => {
            let dlt = window.confirm('Are you sure you want to delete this list?')
            if (dlt) {
                return state.filter((item) => item.id !== action.payload)
            };
        },

        updateCategories: (state, action) => {
            return state.map((category) => {
                if (category.id === action.payload.id) {
                    return {
                        ...category,
                        item: action.payload.item
                    };
                }
                return category;
            });
        },   
    },
});

export const { addCategories, removeCategories, updateCategories } = categoriesReducer.actions;
export default categoriesReducer.reducer;





// try removing todos slice and adding the actions to categories slice rather, in order to create one state