import React, { useRef } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';
import Note from '../Note/Note';

const CategoryItem = (props) => {  
    const { item, updateCategory, removeCategory } = props;
    const inputRef = useRef(true);
  
    const changeFocus = () => {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    };
  
    const update = (categoryId, value, e) => {
      if (e.which === 13) {
        //here 13 is key code for enter key
        updateCategory({ categoryId, item: value });
        inputRef.current.disabled = true;
      }
    };
   
    return (
      <li className="card">
        <div>

          <div className='categoryArea'>
            <textarea 
              className='categoryTextArea' 
              ref={inputRef}
              disabled={inputRef}
              defaultValue={item.item}
              onKeyPress={(e) => update(item.categoryId, inputRef.current.value, e)}
            />
          </div>

          <div className='btns'>
            <motion.button 
              whileTap={{ scale: 0.9}}
              onClick={() => changeFocus()}>
              <AiFillEdit />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9}}
              style={{ color: "red" }}
              onClick={() => removeCategory(item.categoryId)} >
              <IoClose />
            </motion.button>
          </div>

        </div>
        <Note />
      </li>
    );
  };
  
  export default CategoryItem;