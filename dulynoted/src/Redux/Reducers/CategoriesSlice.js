import { createSlice } from '@reduxjs/toolkit';

const categoriesReducer = createSlice({
    name: 'categories',
    // initialState: [{
    //     category: {},
    // }],
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

        // displayCategory: (state, action) => {
        //     // let newState = 
        //     state.filter((category) => category.categoryId === action.payload.key);
        //     // return newState;

        // },

        // displayAllCategories: (state) => {
        //     return state;
        // },
    },
});

export const { addCategories, 
               removeCategories, 
               updateCategories, 
            //    displayCategory, 
            //    displayAllCategories
             } = categoriesReducer.actions;

export default categoriesReducer.reducer;