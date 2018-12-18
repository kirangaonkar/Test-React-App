import React, { Component } from 'react';
import './App.css';

export const InputField = (props) => {
  return (
    <div className="input">
      <input placeholder={props.placeholder} onChange={props.onChange} type={props.type} value={props.val} />
    </div>
  );
}
class App extends Component {
  state = {
    userName: "",
    password: ""
  }

  onChange = (value) => {
    this.setState({
      userName: value.target.value
    });
    console.log(value.target.value);
  }
  render() {
    return (
      <div className="App">
        <div className="login-container">
          <div className="login-form">
            <InputField placeholder="Username" onChange={this.onChange} type="text" val={this.state.userName} />
            <InputField placeholder="Password" onChange={this.onChange} type="password" val={this.state.password} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
