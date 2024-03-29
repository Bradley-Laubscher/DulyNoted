import { createSlice } from '@reduxjs/toolkit';

const categoriesReducer = createSlice({
    name: 'categories',
    initialState: JSON.parse(localStorage.getItem('savedCategories')) || [],
    reducers: {

        addCategories: (state, action) => {
            let localState = [...state];
            localState.push(action.payload);
            return localState;
        },

        removeCategories: (state, action) => {
            let dlt = window.confirm('Are you sure you want to delete this list?')
            if (dlt) {                
                return state.filter((category) => category.categoryId !== action.payload);
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

    },
});

export const { addCategories, 
               removeCategories, 
               updateCategories, 
             } = categoriesReducer.actions;

export default categoriesReducer.reducer;




