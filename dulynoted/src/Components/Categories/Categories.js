import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { addCategories } from "../../Redux/Reducers/CategoriesSlice";
// import { addCategories } from "../../Redux/Reducers/AppSlice";
import DisplayCategories from "./DisplayCategories";


const Categories = () => {
    // const todos = useSelector((state) => state.app.todos);   
    const [ category, setCategory ] = useState('');
    const dispatch = useDispatch();

    const createCategory = () => {
        if (category === '') {
            alert('Please Input a Category')
        } else {
            dispatch(addCategories({
                categoryId: Math.floor(Math.random() * 1000),
                item: category,
                // todos: todos,
                todos: [],
            }));
            setCategory('');
        };
    };
    
    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    return (
        <div>
            <input 
                type='text' 
                onChange={(e) => handleChange(e)} 
                className='category-input'
                value={category}
            />
            <button className='add-btn' onClick={() => createCategory()}>
                Add a List
            </button>
            <br />    
            <DisplayCategories />                
        </div>
    )
};

export default Categories;
