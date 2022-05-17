import React from 'react';
import Categories from "./Components/Categories/Categories";

function App() {
  return (
    <div className="App">
      <Categories />
    </div>
  );
}

export default App;

// import React from 'react';
// import { ReactDOM } from 'react';
// import DisplayCategories from './Components/Categories/DisplayCategories';
// import { useSelector } from 'react-redux';
// import DisplayTodos from './Components/ToDo/DisplayTodos';

// const App = React.createClass ({
  
//   getInitialState() {
//     return {
//       categories: [],
//       todos: [],
//       selectedCategoryId: null,
//     }
//   },

//   selectCategory(category) {
//     this.setState({
//       selectedCategoryId: category
//     });
//   },

//   // componentDidMount() {
//   //   const categoriesState = useSelector((state) => state.categories);
//   //   const todosState = useSelector((state) => state.categories);

//   //   this.setState({
//   //     categories: categoriesState,
//   //     todos : todosState,
//   //   });
//   // },

//   // componentWillUnmount() {
//   //   this.serverRequest.abort();
//   // },

//   render() {
//     const {
//       categories,
//       items,
//       selectedCategoryId
//     } = this.state;

//     return (
//       <div>
//         <DisplayCategories />
//         <DisplayTodos />
//       </div>
//     )
//   }
// });

// export default App;
