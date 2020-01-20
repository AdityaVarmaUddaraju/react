import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  
state = {
  person: [
    {
      name: 'Aditya',
      age: 21
    },
    {
      name: 'Howard Roark',
      age: 0
    }
  ]
}

onChangeHandler = (event) => {
  this.setState({
    person: [
      {
        name: event.target.value,
        age: 21
      },
      {
        name: 'Howard Roark',
        age: 0
      }
    ]
  })
}

  render() {
  return (
    <div className="App">
      <h1>Welcome to react</h1>
      <button onClick={this.switchNameHandler}>Change name</button>
      <Person onChange={this.onChangeHandler} name={this.state.person[0].name} age={this.state.person[0].age}/>
      <Person name={this.state.person[1].name} age={this.state.person[1].age}>My Hobbies: Designing</Person>
    </div>
  );
  }
}

export default App;
