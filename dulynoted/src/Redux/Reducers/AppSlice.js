import { createSlice } from "@reduxjs/toolkit";

const appReducer = createSlice({
    name: 'app',
    initialState: {
        activeCategoryId: []
    },
    reducers: {

        getActiveCategoryId: (state, action) => {
            let localState = state.activeCategoryId.push(action.payload)
            return localState;
        }

    }
})

export const {
    getActiveCategoryId,

} = appReducer.actions

export default appReducer;