import { createSlice } from '@reduxjs/toolkit';

const categoriesReducer = createSlice({
    name: 'categories',
    // initialState: [{
    //     category: {},
    // }],
    // initialState: {
    //     categories: [],
    //     filter: null,
    // },
    initialState: [],
    reducers: {

        addCategories: (state, action) => {
            let localState = [...state];
            localState.push(action.payload);
            // localState.categories.todos = [];
            return localState;
        },

        removeCategories: (state, action) => {
            let dlt = window.confirm('Are you sure you want to delete this list?')
            if (dlt) {
                return state.filter((category) => category.categoryId !== action.payload)
            };
        },

        updateCategories: (state, action) => {
            return state.map((category) => {
                if (category.categoryId === action.payload.categoryId) {
                    return {
                        ...category,
                        item: action.payload.item
                    };
                }
                return category;
            });
        },   

        selectCategory: (state, action) => {
            return state.filter((category) => category.categoryId === action.payload)
        },

        displayAllCategories: (state, action) => {
            return state;
            // return state.filter((category) => category.categoryId === action.payload || category.categoryId !== action.payload)
        },

        // selectCategory: (state, action) => {
        //     state.filter = action.payload.categoryId;
        // },

    },
});

export const { addCategories, 
               removeCategories, 
               updateCategories, 
               selectCategory,
               displayAllCategories
             } = categoriesReducer.actions;

export default categoriesReducer.reducer;


// problem: when selecting a category by clicking on it, it somewhow removes the rest of the categories from state and only leaves the selected category in state.



