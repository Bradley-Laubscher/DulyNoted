import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  completeTodos,
  removeTodos,
  updateTodos,
} from "../../Redux/Reducers/TodoSlice";
import TodoItem from "./TodoItem";

const DisplayTodos = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("active");
  const todos = useSelector((state) => state.todos)

  return (
    <div className="displaytodos">

      <div className="buttons">
    
        <button onClick={() => setSort("active")}>
          Active
        </button>

        <button onClick={() => setSort("completed")}>
          Completed
        </button>

        <button onClick={() => setSort("all")}>
          All
        </button>

      </div>

      <ul>
          {todos.length > 0 && sort === "active" 
            ? todos.map((item) => {
                return (
                  item.completed === false && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={(id) => dispatch(removeTodos(id))}
                      updateTodo={(obj) => dispatch(updateTodos(obj))}
                      completeTodo={(id) => dispatch(completeTodos(id))}
                    />
                        
                  )
                );
              })
            : null}
          {/* for completed items */}
          {todos.length > 0 && sort === "completed" 
            ? todos.map((item) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={(id) => dispatch(removeTodos(id))}
                      updateTodo={(obj) => dispatch(updateTodos(obj))}
                      completeTodo={(id) => dispatch(completeTodos(id))}
                    />
                  )
                );
              })
            : null}
          {/* for all items */}
          {todos.length > 0 && sort === "all" 
            ? todos.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={(id) => dispatch(removeTodos(id))}
                    updateTodo={(obj) => dispatch(updateTodos(obj))}
                    completeTodo={(id) => dispatch(completeTodos(id))}
                  />
                );
              })
            : null}
   
      </ul>
      
    </div>
  );
};

export default DisplayTodos;



// keep all todos in one state, same with categories, 
// only display the categories which are active, (through filtering out ones with the active state)
// only display todos which correspond to the active category (through matching id - somehow) 
// if todo is created within a category, give it  unique ID somehow
