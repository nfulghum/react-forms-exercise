import React from 'react';
import './App.css';
import TodoList from './TodoList';
import BoxList from './BoxList'

function App() {
  return (
    <div className="App">
      <BoxList />
      <TodoList />
    </div>
  );
}

export default App;
