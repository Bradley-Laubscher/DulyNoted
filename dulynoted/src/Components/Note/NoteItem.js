import React, { useRef } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';

const NoteItem = (props) => {
    const { item, updateNotes, removeNotes, completeNotes } = props;
    const inputRef = useRef(true);
  
    const changeFocus = () => {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    };
  
    const update = (id, value, e) => {
      if (e.which === 13) {
        //here 13 is key code for enter key
        updateNotes({ id, item: value });
        inputRef.current.disabled = true;
      }
    };
    
    return (
      <motion.li
        initial={{ x: "150vw", transition: {type: "spring", duration: 1.5 },
        }}
        animate={{ x: 0, transition: {type: "spring", duration: 1.5 },
        }}
        key={item.id}
        className="card"
      >
        <textarea
          className='noteTextArea'
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        />
        
        <div >

          <motion.button 
            whileTap={{ scale: 0.9}} 
            className='btns' 
            onClick={() => changeFocus()}>
            <AiFillEdit />
          </motion.button>

          {item.completed === false && (
            <motion.button
              whileTap={{ scale: 0.9}}
              className='btns'
              style={{ color: "green" }}
              onClick={() => completeNotes(item.id)}
            >
              <IoCheckmarkDoneSharp />
            </motion.button>
          )}
          
          <motion.button
            whileTap={{ scale: 0.9}}
            className='btns'
            style={{ color: "red" }}
            onClick={() => removeNotes(item.id)} >
            <IoClose />
          </motion.button>

        </div>
        {item.completed && <span className="completed">done</span>}
         
      </motion.li>
    );
  };
  
  export default NoteItem;
