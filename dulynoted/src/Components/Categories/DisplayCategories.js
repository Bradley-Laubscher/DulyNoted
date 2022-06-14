import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
         removeCategories,
         updateCategories,
 } from "../../Redux/Reducers/CategoriesSlice";
 import {
  completeNotes,
  removeNotes,
  updateNotes,
} from "../../Redux/Reducers/NoteSlice";
import { setActiveCategoryId } from "../../Redux/Reducers/AppSlice";
import CategoryItem from "./CategoryItem";
import NoteItem from "../Note/NoteItem";

const DisplayCategories = () => {
  const dispatch = useDispatch();
  const cats = useSelector((state) => state.categories);
  const notes = useSelector((state) => state.notes);
  const [ select, setSelect] = useState('All notes');
  const [ activeCategory, setActiveCategory] = useState(null);

    const handleChange = (e) => {
      setSelect(e.target.value) 
    };

    useEffect(() => {
      console.log("selected", select)
      if (select !== 'All notes') {
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
            All notes
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

          { select === 'All notes' && notes.map((item) => {
            return (
              <NoteItem
                  key={item.id}
                  item={item}
                  removeNotes={(id) => dispatch(removeNotes(id))}
                  updateNotes={(obj) => dispatch(updateNotes(obj))}
                  completeNotes={(id) => dispatch(completeNotes(id))}
                />
            )   
          })}
        </ul>
  
      </div>
  )
};

export default DisplayCategories;