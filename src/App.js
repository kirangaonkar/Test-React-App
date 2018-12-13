import React, { Component } from 'react';
import './App.css';
import Parent from './components/parent-to-child/parent';

class App extends Component {
  state = {
    title: 'placeholder'
  }

  changeTheWorld = (newTitle) => {
    this.setState({
      title: newTitle
    });
  }
  render() {
    return (
      <div className="App">
        <Parent changeTheWorld={this.changeTheWorld.bind(this, 'new world')} title={this.state.title}
          keepTheWorldSame={this.changeTheWorld.bind(this, 'same')} />
      </div>
    );
  }
}

export default App;
