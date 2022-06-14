import { createSlice } from "@reduxjs/toolkit";

const appReducer = createSlice({
    name: 'app',
    initialState: {
        activeCategoryId: null,
        // activeCategoryId: [],
    },
    reducers: {

        // getActiveCategoryId: (state, action) => {
        //     return state.activeCategoryId;
        // },

        setActiveCategoryId: (state, action) => {
            state.activeCategoryId = action.payload;
            return state;
        },

    }
})

export const {
    getActiveCategoryId,
    setActiveCategoryId

} = appReducer.actions;

export default appReducer.reducer;