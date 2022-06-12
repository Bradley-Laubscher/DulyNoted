import React, {  useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategories } from "../../Redux/Reducers/CategoriesSlice";
import { motion } from "framer-motion";
import DisplayCategories from "./DisplayCategories";
import { setActiveCategoryId } from "../../Redux/Reducers/AppSlice";


const Categories = () => { 
    const cats = useSelector((state) => state.categories);
    const dispatch = useDispatch();
    const [ categoryItem, setCategoryItem ] = useState('');
    // const [ savedCategories, setSavedCategories ] = useState(() => {
    //     const saved = localStorage.getItem('savedCategories');
    //     const initialValue = JSON.parse(saved);
    //     return initialValue || '';
    // });

    // useEffect(() => {
    //     setSavedCategories(cats);
    // }, [cats]);

    // useEffect(() => {
    //     localStorage.setItem('savedCategories', JSON.stringify(savedCategories));
    // }, [savedCategories]);

    const catItem = () => {
        cats.map((category) => {
            if (category.item === categoryItem) {
                alert('This category already exists');
                cats.pop();
            };
            return setCategoryItem('');
        })
    };
    // why is there an error when adding a duplicate category, also why does setCategory only work from the second category onwards?

    const createCategory = () => {
        if (categoryItem === '') {
            alert('Please input a category for your notes.')
        } else if (!catItem()) {
            const randomNumber = Math.floor(Math.random() * 1000)
            dispatch(addCategories({
                categoryId: randomNumber,
                item: categoryItem,
            }));
            setCategoryItem('');
            dispatch(setActiveCategoryId(randomNumber));
        };
    };
    
    const handleChange = (e) => {
        setCategoryItem(e.target.value);
    };

    return (
        <div className='addCategory'>
            <input 
                className='categoryInput'
                type='text' 
                onChange={(e) => handleChange(e)} 
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
            <DisplayCategories />                
        </div>
    )
};

export default Categories;
