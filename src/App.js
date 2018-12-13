import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name: 'techsith'
  }

  changeName = (newName) => {
    this.setState({
      name: newName
    });
  }

  changeNameFromInput = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <br /><br />
        <button onClick={() => this.changeName('Awsemo tech')}>Change state using a non State</button>
        <button onClick={this.changeName.bind(this, 'Awsemo tech:)')}>Change State using bind</button>
        <br /><br />
        <input type="text" onChange={this.changeNameFromInput} value={this.state.name} />
        <br /><br />
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
