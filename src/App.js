import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Bot from './chatbot/components/bot-container/bot';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Learn React reactively</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

<Bot /></div>
    );
  }
}

export default App;
