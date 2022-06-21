import React, {  useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategories } from "../../Redux/Reducers/CategoriesSlice";
import { motion } from "framer-motion";
import { setActiveCategoryId } from "../../Redux/Reducers/AppSlice";
import { 
    removeCategories,
    updateCategories,
} from "../../Redux/Reducers/CategoriesSlice";
import {
    completeNotes,
    removeNotes,
    updateNotes,
} from "../../Redux/Reducers/NoteSlice";
import NoteItem from "../Note/NoteItem";
import CategoryItem from "./CategoryItem";

const Categories = () => { 
    const cats = useSelector((state) => state.categories);
    const notes = useSelector((state) => state.notes);
    const dispatch = useDispatch();
    const [ categoryItem, setCategoryItem ] = useState('');
    const [ select, setSelect ] = useState('');
    const [ activeCategory, setActiveCategory ] = useState(null);

    const createCategory = () => {
        setSelect(categoryItem);
        if (categoryItem === '') {
            alert('Please input a category for your notes.')
        } else if (!catItem()) {
            dispatch(addCategories({
                categoryId: Math.floor(Math.random() * 1000),
                item: categoryItem,
            }));
            setCategoryItem(''); 
        };
    };

    const catItem = () => {
        cats.map((category) => {
            if (category.item === categoryItem) {
                alert('This category already exists');
                cats.pop();
            };
            return setCategoryItem('');
        })
    };
    // why is there an error when adding a duplicate category, also why does setCategoryItem only work from the second category onwards?
    
    const handleChange = (e) => {
        setCategoryItem(e.target.value);
    };

    const handleSelectChange = (e) => {
        setSelect(e.target.value) 
    };

    useEffect(() => {
        if (select !== 'All notes') {
          const categoryFilter = cats.filter((category) => category.item === select);
          setActiveCategory(categoryFilter);
        } else {
          setActiveCategory(null); 
        }  
    }, [ cats, select ]);

    useEffect(() => {
        if (activeCategory !== null) {
           activeCategory.map((category) => {
            const filteredCategoryId = category.categoryId;
            return dispatch(setActiveCategoryId(filteredCategoryId));
          })
        }
    }, [dispatch, activeCategory]);

    useEffect(() => {
        localStorage.setItem('savedCategories', JSON.stringify(cats));
    }, [cats]);

    return (
        <div>
            <div className='addCategory'>
                <input 
                    className='categoryInput'
                    type='text' 
                    onChange={(e) => handleChange(e)} 
                    onKeyPress={(e) => {
                        if (e.which === 13) {
                            createCategory();
                        }
                    }}
                    value={categoryItem}
                />
                <motion.button 
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.9}} 
                    className='categoryButton' 
                    onClick={() => createCategory()}>
                    Add a list
                </motion.button>   
                <br />    
            </div>
            <div className='displayCategories'>
                Select a list:
                <select className='categorySelection' onChange={handleSelectChange}>
                {cats.map((category) => {
                    return (
                    <option selected>
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
        </div>
    )
};

export default Categories;
