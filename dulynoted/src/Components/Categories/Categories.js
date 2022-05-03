import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCategories } from "../../Redux/Reducers/CategoriesSlice";

const Categories = () => {
    const todos = useSelector((state) => state.todos);
    const [ category, setCategory ] = useState('');
    const dispatch = useDispatch();

    const createCategory = () => {
        if (category === '') {
            alert('Please Input a Category')
        } else {
            dispatch(addCategories({
                id: Math.floor(Math.random() * 1000),
                item: category,
                todos: todos,
            }));
            setCategory('');
        };
    };
    
    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    return (
        <div className='categories'>
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
        </div>
    )
};

export default Categories;
