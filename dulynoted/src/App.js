import React from 'react';
import Todo from './Components/ToDo/ToDo.js';
import DisplayTodos from './Components/DisplayToDo';


function App() {
  return (
    <div className="App">
      <Todo />
      <DisplayTodos />
    </div>
  );
}

export default App;
