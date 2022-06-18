import { createSlice } from "@reduxjs/toolkit";

const appReducer = createSlice({
    name: 'app',
    initialState: {
        activeCategoryId: null,
    },
    reducers: {

        setActiveCategoryId: (state, action) => {
            state.activeCategoryId = action.payload;
            return state;
        },

    }
})

export const {
    setActiveCategoryId

} = appReducer.actions;

export default appReducer.reducer;