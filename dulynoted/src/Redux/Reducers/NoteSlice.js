import { createSlice } from '@reduxjs/toolkit';

const noteReducer = createSlice({
    name: 'notes',
    initialState: [],
    reducers: {

        addNotes: (state, action) => {
            let localState = [...state];
            localState.push(action.payload);
            return localState;
        },

        removeNotes: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },

        updateNotes: (state, action) => {
            return state.map((note) => {
                if (note.id === action.payload.id) {
                    return {
                        ...note,
                        item: action.payload.item
                    };
                }
                return note;
            })
        },

        completeNotes: (state, action) => {
            return state.map((note) => {
                if (note.id === action.payload) {
                    return {
                        ...note,
                        completed: true,
                    };
                }   
                return note;
            })
        },
    }
});

export const { addNotes, removeNotes, updateNotes, completeNotes } = noteReducer.actions;
export default noteReducer.reducer;

