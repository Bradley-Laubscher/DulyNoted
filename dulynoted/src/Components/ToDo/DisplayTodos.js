import React, { useState } from "react";
import { connect} from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../../Redux/Reducers/TodoSlice";
// import {
//   addTodos,
//   completeTodos,
//   removeTodos,
//   updateTodos,
// } from "../../Redux/Reducers/AppSlice";
import TodoItem from "./TodoItem";

// const mapStateToProps = (state) => {
//   console.log('state', state);
//   return {
//     todos: state.todos,
//   };
// };
const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
    // updateList: (categoryId) => dispatch(updateLists(categoryId)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");

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

        {/* <button onClick={() => props.updateList(1)}>
           test
        </button> */}

      </div>

      <ul>
          {/* { if (categories.)

          } */}
          {props.todos.length > 0 && sort === "active" 
            ? props.todos.map((item) => {
                return (
                  item.completed === false && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                        
                  )
                );
              })
            : null}
          {/* for completed items */}
          {props.todos.length > 0 && sort === "completed" 
            ? props.todos.map((item) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}
          {/* for all items */}
          {props.todos.length > 0 && sort === "all" 
            ? props.todos.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                );
              })
            : null}
   
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
