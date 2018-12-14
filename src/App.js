import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

const Test = (props) => {
  return (
    <div>
      <h1>{props.str}</h1>
      <h1>{props.bool ? 'bool' : 'no bool'}</h1>
      <h1>{props.strOrNum}</h1>
    </div>);
}

Test.propTypes = {
  str: PropTypes.string,
  bool: PropTypes.bool,
  strOrNum: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Test str={'Kiran'}
          bool strOrNum={true} />
      </div>
    );
  }
}

export default App;
