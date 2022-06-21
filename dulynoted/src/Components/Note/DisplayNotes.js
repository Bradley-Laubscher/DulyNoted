import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import {
  completeNotes,
  removeNotes,
  updateNotes,
} from "../../Redux/Reducers/NoteSlice";
import NoteItem from "./NoteItem";

const DisplayNotes = () => {
  const dispatch = useDispatch();
  const activeCategoryId = useSelector((state) => state.app.activeCategoryId);
  const notes = useSelector((state) => state.notes);
  const [sort, setSort] = useState("active");
  const filteredNotes = notes.filter((note) => note.activeCategoryId === activeCategoryId);
    
  useEffect(() => {
    localStorage.setItem('savedNotes', JSON.stringify(notes));
  }, [ notes ]);
  
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
            ? filteredNotes.map((item) => {
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
            ? filteredNotes.map((item) => {
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
            ? filteredNotes.map((item) => {
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
