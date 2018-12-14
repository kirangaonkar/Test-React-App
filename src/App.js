import React, { Component, PureComponent } from 'react';
import './App.css';


const Temp = (props) => {
  console.log("Render Temp");
  return (<div>{props.val}</div>);
}
class App extends PureComponent {
  state = {
    val: 1
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        val: 1
      });
    }, 2000);
  }

  /* shouldComponentUpdate(nextProp, nextState) {
    console.log("Next state" + JSON.stringify(nextState));
    return this.state.val !== nextState.val;
  } */
  render() {
    console.log("Render App");
    return (
      <div className="App">
        <Temp val={this.state.val} />
      </div>
    );
  }
}

export default App;
