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
    const dispatch = useDispatch();
    const cats = useSelector((state) => state.categories);
    const notes = useSelector((state) => state.notes);
    const [ categoryItem, setCategoryItem ] = useState('');
    const [ select, setSelect ] = useState(JSON.parse(localStorage.getItem('savedSelect')) || '');
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
    
    const handleChange = (e) => {
        setCategoryItem(e.target.value);
    };

    const handleSelectChange = (e) => {
        setSelect(e.target.value) 
    };

    const clearAll = () => {
        if (window.confirm('Do you want to clear ALL lists and notes?')) {
            localStorage.clear();
            window.location.reload(true);
        }
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
    });  

    useEffect(() => {
        localStorage.setItem('savedCategories', JSON.stringify(cats));
    });

    useEffect(() => {
        localStorage.setItem('savedSelect', JSON.stringify(select));
    });

    useEffect(() => {
        localStorage.setItem('savedNotes', JSON.stringify(notes));
    }, [notes]);
    
    return (
        <div>
            <div className="sectionTitle">
                Add A list
            </div>
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
                <div className="addCategoryButtons">
                    <motion.button
                        className='categoryButton'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9}}
                        onClick={() => createCategory()}>
                        Add A List
                    </motion.button>
                    <motion.button
                        className='clearAll'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9}}
                        onClick={() => clearAll()}>
                        Clear All
                    </motion.button>
                </div>
                <br />
                <div className="selectList">
                    <div className="sectionTitle">
                        Select a list
                    </div>
                    <select className='categorySelection' onChange={handleSelectChange} value={select}>
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
                </div>
            </div>
            <div className='displayCategories'>
                <ul className='categoryList'>  
                    { activeCategory !== null && activeCategory.map((category) => {
                        return (
                        <div>
                            <CategoryItem
                            key={category.categoryId}
                            item={category}
                            removeCategory={(categoryId) => {
                                dispatch(removeCategories(categoryId));
                                const updatedNotes = notes.filter(note => note.categoryId !== categoryId);
                                localStorage.setItem('savedNotes', JSON.stringify(updatedNotes));
                            }}
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


// Problem 1: Select defaults to the last added category and not last selected category on page refresh;
// Problem 2: when 'All notes' category is selected, the last note cannot be removed from localStorage, therefore it can re-appear if the user refreshes the page;
// Problem 3: when removing a category, the notes remain in localStorage and can still be seen in the 'All notes' category after page refresh;