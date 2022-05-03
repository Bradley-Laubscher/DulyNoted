import React from "react";
import { connect } from "react-redux";
import { addCategories,
         removeCategories,
         updateCategories
 } from "../../Redux/Reducers/CategoriesSlice";
import CategoryItem from "./CategoryItem";

const mapStateToProps = (state) => {
    return {
      categories: state.categories,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addCategory: (obj) => dispatch(addCategories(obj)),
      removeCategory: (id) => dispatch(removeCategories(id)),
      updateCategory: (obj) => dispatch(updateCategories(obj)),
    };
  };

const DisplayCategories = (props) => {
    return (
        <div>
          <ul>
            {props.categories.map((item) => {
              return (
                  <CategoryItem
                    key={item.id}
                    item={item}
                    removeCategory={props.removeCategory}
                    updateCategory={props.updateCategory}
                  />
              )
            })}
          </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCategories);



// add to list,
// take list add to categories,
// map categories,
// map list