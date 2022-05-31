import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
         removeCategories,
         updateCategories,
 } from "../../Redux/Reducers/CategoriesSlice";
import CategoryItem from "./CategoryItem";

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
      const categoryFilter = cats.filter((category) => category.item === select);
      setActiveCategory(categoryFilter);
    }, [cats, select]);
 
    return (
      <div>

        <select id='category-selection' onChange={handleChange}>
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
    
        <ul>  
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