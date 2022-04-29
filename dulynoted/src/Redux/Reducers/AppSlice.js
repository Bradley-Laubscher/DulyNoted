import { createSlice } from '@reduxjs/toolkit';

const AppReducer = createSlice({
    name: 'app',
    initialState: [{
        activeCategory: 0,
    }],
    reducers: {

        updateLists: (state, action) => {
            // always make a copy of state
            let localState = {...state};
            localState.activeCategory = action.payload;
            return localState;
        },     
    }
});

export const { updateLists } = AppReducer.actions;
export default AppReducer.reducer;
