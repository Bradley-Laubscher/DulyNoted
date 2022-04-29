import React, { useState } from "react";
import { connect } from "react-redux";
import { addCategories } from "../../Redux/Reducers/CategoriesSlice";

const mapStateToProps = (state) => {
    return {
        categories: state,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCategory: (obj) => dispatch(addCategories(obj)),
    }
};

const Categories = (props) => {
    const [ category, setCategory ] = useState('');

    const createCategory = () => {
        if (category === '') {
            alert('Please Input a Category')
        } else {
            props.addCategory({
                id: Math.floor(Math.random() * 1000),
                item: category,
            });
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
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
