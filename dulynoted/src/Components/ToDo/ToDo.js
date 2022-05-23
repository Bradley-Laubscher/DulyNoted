import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from '../../Redux/Reducers/TodoSlice';
import DisplayTodos from './DisplayTodos';
// import { useSelector } from 'react-redux';

const Todo = () => {
    const [todo, setTodo] = useState('');
    // const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    const add = () => {
        if (todo === '') {
            alert('Please Input a To-Do')
        } else {
            dispatch(addTodos({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            }));
            setTodo('');
        };
    };

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    return (
        <div className='add-to-do'>
            <input 
                type='text'
                onChange={(e) => handleChange(e)}
                className='todo-input'
                value={todo}
            />
           <button className='add-button' onClick={() => add()}>
               Add a To-Do
           </button>
           <br />
           <DisplayTodos />
        </div>
    )
};

export default Todo;
