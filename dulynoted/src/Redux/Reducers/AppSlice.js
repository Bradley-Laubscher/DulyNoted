// import { createSlice } from '@reduxjs/toolkit';

// const AppReducer = createSlice({
//     name: 'app',
//     initialState: { 
//         categories: { 
//             // todos: [],
//         },
//     },
//     // initialState: {
//     //     categories: [],
//     //     todos: [],
//     // },
//     reducers: {

//         // updateLists: (state, action) => {
//         //     // always make a copy of state
//         //     let localState = {...state};
//         //     localState.activeCategory = action.payload;
//         //     return localState;
//         // },   
        
//         addCategories: (state, action) => {
//             let localState = [...state];
//             localState.push(action.payload);
//             return localState;
//             // return state.categories.push(action.payload);
//         },

// // when adding a category, reset todos to an empty state
// //             onClick addCategory() - localState.category.todos = [],

//         removeCategories: (state, action) => {
//             let dlt = window.confirm('Are you sure you want to delete this list?')
//             if (dlt) {
//                 return state.categories.filter((category) => category.categoryId !== action.payload)
//             };
//         },

//         updateCategories: (state, action) => {
//             return state.categories.map((category) => {
//                 if (category.categoryId === action.payload.categoryId) {
//                     return {
//                         ...category,
//                         item: action.payload.item
//                     };
//                 }
//                 return category;
//             });
//         },   

//         addTodos: (state, action) => {
//             let localState = [...state];
//             localState.todos.push(action.payload);
//             return localState;
//             // state.push(action.payload);
//         },

//         removeTodos: (state, action) => {
//             return state.todos.filter((item) => item.id !== action.payload)
//         },

//         updateTodos: (state, action) => {
//             return state.todos.map((todo) => {
//                 if (todo.id === action.payload.id) {
//                     return {
//                         ...todo,
//                         item: action.payload.item
//                     };
//                 }
//                 return todo;
//             })
//         },

//         completeTodos: (state, action) => {
//             return state.todos.map((todo) => {
//                 if (todo.id === action.payload) {
//                     return {
//                         ...todo,
//                         completed: true,
//                     };
//                 }   
//                 return todo;
//             })
//         },

//            // addToCategory: (state, action) => {
//         //     let localState = [...state];
//         //     if (state.category.categoryId === state.category.todos.categoryId) {
//         //         localState.category.push(action.payload);
//         //         return localState;
//         //     }
//         // },

//         // displayCategory: (state, action) => {
//         //     state.filter((category) => category.categoryId === action.payload.key);
//         // },

//         // displayAllCategories: (state) => {
//         //     return state;
//         // },
//     }
// });

// export const { 
//     addCategories, 
//     removeCategories, 
//     updateCategories, 
//     // addToCategory,
//     // updateLists,
//      // displayAllCategories, 
//     // displayCategory 
//     addTodos,
//     removeTodos, 
//     updateTodos, 
//     completeTodos,
// } = AppReducer.actions;
// export default AppReducer.reducer;
