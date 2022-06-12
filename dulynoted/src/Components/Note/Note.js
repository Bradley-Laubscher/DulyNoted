import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNotes } from '../../Redux/Reducers/NoteSlice';
import { motion } from 'framer-motion';
import DisplayNotes from './DisplayNotes';

const Notes = (props) => {
    const [note, setNote] = useState('');
    const activeCategoryId = useSelector((state) => state.app.activeCategoryId);
    const dispatch = useDispatch();

    const add = () => {
        if (note === '') {
            alert('Please input a note')
        } else {
            console.log(activeCategoryId);
            dispatch(addNotes({
                id: Math.floor(Math.random() * 1000),
                item: note,
                completed: false,
                activeCategoryId: activeCategoryId,
            }));
            setNote('');
        };
    };

    const handleChange = (e) => {
        setNote(e.target.value);
    };

    return (
        <div className='addNote'>
            <input 
                type='text'
                onChange={(e) => handleChange(e)}
                value={note}
            />
           <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9}} 
                className='button' 
                onClick={() => add()}>
                Add a note
           </motion.button>
           <DisplayNotes />
        </div>
    )
};

export default Notes;
