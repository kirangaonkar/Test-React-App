import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actionCreator from './store/actions/app-actions'
class App extends Component {
  /*  state = {
     age: 24
   };
 
   onAgeUp = () => {
     this.setState({
       ...this.state,
       age: this.state.age + 1
     });
   }
 
   onAgeDown = () => {
     this.setState({
       ...this.state,
       age: this.state.age - 1
     });
   } */
  render() {
    return (
      <div className="App">
        <div>Age:
        <span>
            {this.props.age}
          </span>
        </div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}


const mapStateToProps = (store) => {
  return {
    age: store.age
  }
}

const mapDispachToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch(actionCreator.ageUp(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1)),
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);
