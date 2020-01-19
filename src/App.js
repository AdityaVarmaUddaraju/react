import React from 'react';
import Person from './Person/Person'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to react</h1>
      <Person name='Aditya' age={21}/>
      <Person name='Howard Roark' age={0}>My Hobbies: Designing</Person>
    </div>
  );
}

export default App;
