import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
         removeCategories,
         updateCategories,
 } from "../../Redux/Reducers/CategoriesSlice";
import CategoryItem from "./CategoryItem";
import { setActiveCategoryId } from "../../Redux/Reducers/AppSlice";

const DisplayCategories = () => {
  const dispatch = useDispatch();
  const cats = useSelector((state) => state.categories);
  const [ select, setSelect] = useState('All');
  const [ activeCategory, setActiveCategory] = useState(null);

    const handleChange = (e) => {
      setSelect(e.target.value) 
    };

    useEffect(() => {
      console.log("selected", select)
      if (select !== 'All') {
        const categoryFilter = cats.filter((category) => category.item === select);
        setActiveCategory(categoryFilter);
      } else {
        setActiveCategory(null);
      }
      
    }, [cats, select]);

    useEffect(() => {
      if (activeCategory !== null) {
         activeCategory.map((category) => {
          const filteredCategoryId = category.categoryId;
          return dispatch(setActiveCategoryId(filteredCategoryId));
        })
      } 
    }, [dispatch, activeCategory]);

    // get selected categories Id from activeCategory,
    // add activeCategoryId to appSlice,
    // use useSelector in note to get activeCategoryId from appSlice,
    // somehow check if activeCategoryId matches current categoryId ???????
    
    return (
      <div className='displayCategories'>
        Select a list: 
        <select className='categorySelection' onChange={handleChange}>
          {cats.map((category) => {
            return (
              <option>
                {category.item}
              </option>
            )  
          })}
          <option>
            All
          </option>
        </select>
    
        <ul className='categoryList'>  
          { activeCategory !== null && activeCategory.map((category) => {
            return (
              <div>
                <CategoryItem
                  key={category.categoryId}
                  item={category}
                  removeCategory={(categoryId) => dispatch(removeCategories(categoryId))}
                  updateCategory={(obj) => dispatch(updateCategories(obj))}
                /> 
              </div>    
            )
          })}

          { select === 'All' && cats.map((category) => {
            return (
              <div>
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

export default DisplayCategories;