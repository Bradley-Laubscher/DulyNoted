import React, { useState } from 'react';

export default function ToDo() {
    const [todo, setTodo] = useState('');

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    return (
        <div className='addToDo'>
            <input 
                type='text'
                onChange={(e) => handleChange(e)}
                className='todo-input'
                value={todo}
            />
           <button className='add-button'>
               Add
           </button>
           <br />
        </div>
    )
};

