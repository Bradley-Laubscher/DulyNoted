import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos } from '../../Redux/Reducers/TodoSlice';
import DisplayTodos from './DisplayTodos';

const Todo = () => {
    const [todo, setTodo] = useState('');
    const activeCategoryId = useSelector((state) => state.app.activeCategoryId);
    // const catId = useSelector((state) => state.category);
    const dispatch = useDispatch();

    const add = () => {
        if (todo === '') {
            alert('Please Input a To-Do')
        } else {
            dispatch(addTodos({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
                // categoryId: catId.categoryId,
                activeCategoryId: activeCategoryId,
            }));
            setTodo('');
        };
    };

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    return (
        <div className='addTodo'>
            <input 
                type='text'
                onChange={(e) => handleChange(e)}
                className='todo-input'
                value={todo}
            />
           <button className='button' onClick={() => add()}>
               Add a To-Do
           </button>
           <DisplayTodos />
        </div>
    )
};

export default Todo;


// external state --- appState 

// use selector on appstate to get active category Id