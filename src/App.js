import React, { Component } from 'react';
import './App.css';
import Users from './Users/Users'
function SayHello() {
  return <h1>Hello</h1>
}
class App extends Component {
  render() {
    return (
      <div className={1 + 1}>
        <SayHello>Hello</SayHello>
        <Users title="Users List" />
      </div>
    );
  }
}

export default App;
