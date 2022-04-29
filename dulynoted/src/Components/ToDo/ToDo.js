import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../../Redux/Reducers/TodoSlice';

const mapStateToProps = (state) => {
    return {
        todos: state,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj))
    }
};

const Todo = (props) => {
    console.log('props', props);
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

        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);