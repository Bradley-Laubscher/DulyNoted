import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './ToDoSlice';

const mapStateToProps = (state) => {
    return {
        todos: state,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodo(obj))
    }
};

const Todo = (props) => {
    const [todo, setTodo] = useState('');

    const add = () => {
        if (todo === '') {
            alert('Please Input a To-Do')
        } else {
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            });
            setTodo('');
        }
    };


    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    return (
        <div className='add-to-do'>
            <input 
                type='text'
                onChange={(e) => handleChange(e)}
                className='todo-input'
                value={todo}
            />
           <button className='add-button' onClick={() => add()}>
               Add
           </button>
           <br />

           <ul>
               {props.todos.length > 0 &&
                props.todos.map((item) => {
                    return <li key={item.id}>{item.item}</li>
                })}
           </ul>

        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);