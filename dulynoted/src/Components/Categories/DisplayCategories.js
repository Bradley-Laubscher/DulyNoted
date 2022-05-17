import React from "react";
import { connect } from "react-redux";
import { 
         removeCategories,
         updateCategories,
        //  displayCategory,
        //  displayAllCategories,
 } from "../../Redux/Reducers/CategoriesSlice";
// import { 
//   removeCategories,
//   updateCategories,
//   // addToCategory,
//   // displayCategory,
//   // displayAllCategories,
// } from "../../Redux/Reducers/AppSlice";
import CategoryItem from "./CategoryItem";

// const mapStateToProps = (state) => {
//   return {
//     categories: state.app,
//   };
// };
const mapStateToProps = (state) => {
  return {
    cat: state.categories,
  };
};
  
const mapDispatchToProps = (dispatch) => {
  return {
    removeCategory: (categoryId) => dispatch(removeCategories(categoryId)),
    updateCategory: (obj) => dispatch(updateCategories(obj)),
    // addToCategory: (obj) => dispatch(addToCategory(obj)),
    // displayCategory: (categoryId) => dispatch(displayCategory(categoryId)),
    // displayAllCategories: () => dispatch(displayAllCategories()),
  };
};


const DisplayCategories = (props) => {
    return (
      <div>
        <ul>
          {props.cat?.map((category) => {
            return (
              // onClick={props.displayCategory}
              // onClick={props.addToCategory}
              <button >
                {category.item}
              </button>
            )
          })}
          <button>
            All
          </button>
        
        </ul>
        <ul>  
        {props.cat?.map((category) => {
            return (
              <div>
                <CategoryItem
                  key={category.categoryId}
                  item={category}
                  removeCategory={props.removeCategory}
                  updateCategory={props.updateCategory}
                  displayCategories={props.displayCategories}
                /> 
              </div>    
            )
          })}
        </ul>
      </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCategories);