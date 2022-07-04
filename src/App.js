import React from 'react';
import './App.css';
import TodoHandlerComponent from './components/todoHandlerComponent';


function App() {
  return (
    <div className="App" style={{backgroundColor:"lightgray", padding:"8px"}}>
      <TodoHandlerComponent/>
    </div>
  );
}

export default App;
