import React, { Component } from 'react';
import './App.css';

const MyInput = (props) => {
  return (
    <input
      ref={props.inputRef}
      type="text" />
  );
}
const FunctionalCustomComponent = () => {
  let inputRef = null;

  const onClick = () => {
    inputRef.focus();
  }
  return (
    <div>
      <span>My Input:  </span>
      <MyInput
        inputRef={(input) => { inputRef = input }}
      />
      <input onClick={onClick} value="submit"
        type="submit" />
    </div>
  );
}
class App extends Component {

  handleClick = () => {
    console.log("onClick");
    alert("Yeyyyy");
  }

  onKeyUp = (target, e) => {
    if (e.keyCode === 13) {
      switch (target) {
        case 'firstName':
          this.lastName.focus();
          break;
        case 'lastName':
          this.age.focus();
          break;
        case 'age':
          this.submit.focus();
          break;
        case 'submit':
          this.submit.click();
          break;
      }
    }
  }
  render() {
    return (
      <div className="App">
        <FunctionalCustomComponent />
        <div>
          <span>First name:  </span>
          <input ref={(input) => { this.firstName = input }}
            onKeyUp={this.onKeyUp.bind(this, 'firstName')} type="text" />
        </div>

        <div>
          <span>Last name:  </span>
          <input ref={(input) => { this.lastName = input }}
            onKeyUp={this.onKeyUp.bind(this, 'lastName')} type="text" />
        </div>

        <div>
          <span>Age:  </span>
          <input ref={(input) => { this.age = input }}
            onKeyUp={this.onKeyUp.bind(this, 'age')}
            type="text" />
        </div>

        <div>
          <input
            ref={(input) => { this.submit = input }}
            type="submit" onClick={this.handleClick.bind(this)}
            onKeyUp={this.onKeyUp.bind(this, 'submit')}
            value="submit" />
        </div>
      </div>
    );
  }
}

export default App;
