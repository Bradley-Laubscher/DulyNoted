import React, { useRef } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { IoClose } from "react-icons/io5";
import Todo from '../ToDo/Todo';
import DisplayTodos from '../ToDo/DisplayTodos';

const CategoryItem = (props) => {
  
    const { item, updateCategory, removeCategory } = props;
  
    const inputRef = useRef(true);
  
    const changeFocus = () => {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    };
  
    const update = (id, value, e) => {
      if (e.which === 13) {
        //here 13 is key code for enter key
        updateCategory({ id, item: value });
        inputRef.current.disabled = true;
      }
    };
   
    return (
      <li
        key={item.id}
        className="card"
      >
        <textarea
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        />
        {/* <button onClick={}>
          {item.item}
        </button> */}
        <div className="btns">
          <button  onClick={() => changeFocus()}>
            <AiFillEdit />
          </button>
          <button
            style={{ color: "red" }}
            onClick={() => removeCategory(item.id)} >
            <IoClose />
          </button>
          <Todo />
          <DisplayTodos />
        </div>
      </li>
    );
  };
  
  export default CategoryItem;