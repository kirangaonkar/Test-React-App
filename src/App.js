import React, { Component, Fragment } from 'react';
import './App.css';
import Child from './components/child';


const Temp = (props) => {
  return (
    <Fragment>
      <div >HI</div>
      <div >{props.greetings}</div>
    </Fragment>
  );
}
class App extends Component {
  state = {
    name: "John"
  }
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      name: "Peter"
    }
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentWillReceiveProps() {
    console.log("child componentWillReceiveProps");
  }
  render() {
    console.log("render");
    return (
      <div className="App">

        {this.state.name}

        <Child greeting="HELLO" />

        <button onClick={this.changestate}>Change</button>
      </div>
    );
  }

  changestate = () => {
    this.setState({
      name: "Joe"
    });
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

}
export default App;
