import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategories } from "../../Redux/Reducers/CategoriesSlice";
import DisplayCategories from "./DisplayCategories";


const Categories = () => { 
    const [ category, setCategory ] = useState('');
    const dispatch = useDispatch();

    const createCategory = () => {
        if (category === '') {
            alert('Please Input a Category')
        } else {
            dispatch(addCategories({
                categoryId: Math.floor(Math.random() * 1000),
                item: category,
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
                value={category}
            />
            <button onClick={() => createCategory()}>
                Add a List
            </button>
            <br />    
            <DisplayCategories />                
        </div>
    )
};

export default Categories;
