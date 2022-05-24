import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { connect } from "react-redux";
// import { useState } from "react";
import { 
         removeCategories,
         updateCategories,
         selectCategory,
         displayAllCategories,
 } from "../../Redux/Reducers/CategoriesSlice";
import CategoryItem from "./CategoryItem";

// const mapStateToProps = (state) => {
//   return {
//     cat: state.categories,
//   };
// };
  
// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeCategory: (categoryId) => dispatch(removeCategories(categoryId)),
//     updateCategory: (obj) => dispatch(updateCategories(obj)),
//     selectCategory: (categoryId) => dispatch(selectCategory(categoryId)),
//     displayAllCategories: () => dispatch(displayAllCategories()),
//   };
// };


const DisplayCategories = () => {
  const dispatch = useDispatch();
  const cat = useSelector((State) => State.categories);

    // const [state, setState] = useState('All');

    // const cats = useSelector((state) => { 
    //   const all = state.categories.categories;
    //   const filterId = state.categories.filter;
    //   if (filterId === null) {
    //     return all;
    //   } else {
    //     return all.filter(category => category.categoryId === filterId)
    //   }
    // })

    return (
      <div>
        <ul>
          {cat.map((category) => {
            return (
              // <button onClick={() => setState('Active')}>
              //   {category.item}
              // </button>
              // <button onClick={() => props.selectCategory(category.categoryId)}>
              //   {category.item}
              // </button>
              <button onClick={() => dispatch(selectCategory(category.categoryId))}>
                {category.item}
              </button>
            )  
          })}
          
          {/* <button onClick={() => props.displayAllCategories()}>
            All
          </button> */}
          <button onClick={() => dispatch(displayAllCategories())}>
            All
          </button>
        
        </ul>
        <ul>  
        {/* {props.cat.map((category) => {
            return (
              <div key={category.categoryId}>
                <CategoryItem
                  key={category.categoryId}
                  item={category}
                  removeCategory={props.removeCategory}
                  updateCategory={props.updateCategory}
                /> 
              </div>    
            )
          })} */}
          {cat.map((category) => {
            return (
              <div key={category.categoryId}>
                <CategoryItem
                  key={category.categoryId}
                  item={category}
                  removeCategory={(categoryId) => dispatch(removeCategories(categoryId))}
                  updateCategory={(obj) => dispatch(updateCategories(obj))}
                /> 
              </div>    
            )
          })}

        </ul>
      </div>
  )
};

// export default connect(mapStateToProps, mapDispatchToProps)(DisplayCategories);
export default DisplayCategories;

// To Filter state - use useSelector instead of dispatching and action with the filter function in categoriesSlice (as this changes state permanently).