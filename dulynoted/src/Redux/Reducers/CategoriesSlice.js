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
                // let savedNotes = JSON.parse(localStorage.getItem('savedNotes'));
                // let savedCategories = JSON.parse(localStorage.getItem('savedCategories'));

                // // have two arrays of saved data, if one includes the other, return, else removeItem;
                // let savedNotesArray = [];
                // let savedCategoriesArray = [];
                // savedNotesArray.push(savedNotes.activeCategoryId);
                // savedCategoriesArray.push(savedCategories.categoryId);
                // let filteredSavedNotesArray = savedNotesArray.filter((activeCategoryId) => !savedCategories.includes(activeCategoryId));
                // localStorage.removeItem(filteredSavedNotesArray);
                // // return  savedNotesArray to savedNotes state(not just the ID's);
                // // set localStorage to the new state;
                // return localStorage.setItem()

                // savedNotes.map((note) => {
                //     state.map((category) => {
                //         if (category.categoryId !== note.activeCategoryId) {
                //             return localStorage.removeItem(note);
                //         };
                //     });
                //     return localStorage.setItem('savedNotes', JSON.stringify(savedNotes));
                // });
                
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




