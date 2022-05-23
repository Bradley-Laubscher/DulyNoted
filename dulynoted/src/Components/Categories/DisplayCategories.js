import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { 
         removeCategories,
         updateCategories,
         selectCategory,
        //  displayAllCategories,
 } from "../../Redux/Reducers/CategoriesSlice";
import CategoryItem from "./CategoryItem";

const mapStateToProps = (state) => {
  return {
    cat: state.categories,
  };
};
  
const mapDispatchToProps = (dispatch) => {
  return {
    removeCategory: (categoryId) => dispatch(removeCategories(categoryId)),
    updateCategory: (obj) => dispatch(updateCategories(obj)),
    selectCategory: (categoryId) => dispatch(selectCategory(categoryId)),
    // displayAllCategories: () => dispatch(displayAllCategories()),
  };
};


const DisplayCategories = (props) => {
    const [state, setState] = useState('All');

    return (
      <div>
        <ul>
          {props.cat.map((category) => {
            return (
              // <button onClick={() => setState('Active')}>
              //   {category.item}
              // </button>
              <button onClick={() => props.selectCategory(category.categoryId)}>
                {category.item}
              </button>
            )  
          })}
          
          <button onClick={() => setState('All')}>
            All
          </button>
          {/* <button onClick={() => props.displayAllCategories()}>
            All
          </button> */}
        
        </ul>
        <ul>  
        {/* {props.cat.map((category) => {
            return (
              <div>
                <CategoryItem
                  key={category.categoryId}
                  item={category}
                  removeCategory={props.removeCategory}
                  updateCategory={props.updateCategory}
                /> 
              </div>    
            )
          })} */}
          {/* {props.cat.length > 0 && state === "Active" 
           ? props.cat.map((category) => {
            return (
              category.isActive === true && (
                <CategoryItem
                  key={category.categoryId}
                  item={category}
                  removeCategory={props.removeCategory}
                  updateCategory={props.updateCategory}
                /> 
                ) 
            )
          })
          : null}

          {props.cat.length > 0 && state === "inActive" 
           ? props.cat.map((category) => {
            return (
              category.isActive === false && (
                <CategoryItem
                  key={category.categoryId}
                  item={category}
                  removeCategory={props.removeCategory}
                  updateCategory={props.updateCategory}
                /> 
                ) 
            )
          })
          : null} */}

          {props.cat.length > 0 && state === "All" 
           ? props.cat.map((category) => {
            return (
                <CategoryItem
                  key={category.categoryId}
                  item={category}
                  removeCategory={props.removeCategory}
                  updateCategory={props.updateCategory}
                /> 
                ) 
          })
          : null}

        </ul>
      </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCategories);


// if an item is clicked - set active,
// if active, show category with isActive property set to true,
// hide other categories by setting their isActive property to false,
