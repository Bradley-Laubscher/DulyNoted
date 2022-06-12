import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  completeNotes,
  removeNotes,
  updateNotes,
} from "../../Redux/Reducers/NoteSlice";
import { motion } from "framer-motion";
import NoteItem from "./NoteItem";

const DisplayNotes = () => {
  const dispatch = useDispatch();
  const activeCategoryId = useSelector((state) => state.app.activeCategoryId);
  const notes = useSelector((state) => state.notes.filter((note) => note.activeCategoryId === activeCategoryId));
  const [sort, setSort] = useState("active");
//   const [ savedNotes, setSavedNotes ] = useState (() => {
//     const saved = localStorage.getItem('savedNotes');
//     const initialValue = JSON.parse(saved);
//     return initialValue || '';
//   });

//   useEffect(() => {
//     setSavedNotes(notes);
// }, [notes]);

//   useEffect(() => {
//     localStorage.setItem('savedNotes', JSON.stringify(savedNotes));
//   }, [savedNotes]);
 
  return (
    <div className="displayNotes">

      <div className="buttons">
    
        <motion.button whileTap={{ scale: 0.9}} onClick={() => setSort("active")}>
          Active
        </motion.button>

        <motion.button whileTap={{ scale: 0.9}} onClick={() => setSort("completed")}>
          Completed
        </motion.button>

        <motion.button whileTap={{ scale: 0.9}} onClick={() => setSort("all")}>
          All
        </motion.button>

      </div>

      <ul>
          {notes.length > 0 && sort === "active" 
            ? notes.map((item) => {
                return (
                  item.completed === false && (
                    <NoteItem
                      key={item.id}
                      item={item}
                      removeNotes={(id) => dispatch(removeNotes(id))}
                      updateNotes={(obj) => dispatch(updateNotes(obj))}
                      completeNotes={(id) => dispatch(completeNotes(id))}
                    />
                        
                  )
                );
              })
            : null}
          {/* for completed items */}
          {notes.length > 0 && sort === "completed" 
            ? notes.map((item) => {
                return (
                  item.completed === true && (
                    <NoteItem
                      key={item.id}
                      item={item}
                      removeNotes={(id) => dispatch(removeNotes(id))}
                      updateNotes={(obj) => dispatch(updateNotes(obj))}
                      completeNotes={(id) => dispatch(completeNotes(id))}
                    />
                  )
                );
              })
            : null}
          {/* for all items */}
          {notes.length > 0 && sort === "all" 
            ? notes.map((item) => {
                return (
                  <NoteItem
                    key={item.id}
                    item={item}
                    removeNotes={(id) => dispatch(removeNotes(id))}
                    updateNotes={(obj) => dispatch(updateNotes(obj))}
                    completeNotes={(id) => dispatch(completeNotes(id))}
                  />
                );
              })
            : null}
   
      </ul>
      
    </div>
  );
};

export default DisplayNotes;



// keep all notes in one state, same with categories, 
// only display the categories which are active, (through filtering out ones with the active state)
// only display notes which correspond to the active category (through matching id - somehow) 
// if note is created within a category, give it  unique ID somehow
