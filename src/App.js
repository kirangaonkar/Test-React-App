import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route'


const User = (params) => {
  return (<h1> Welcome User {params.username}</h1>);
}
class App extends Component {

  state = {
    loggedIn: false
  }

  loginHandle = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }));
  }
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <NavLink to="/home" exact activeStyle={
                { color: 'green' }
              } > Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" exact activeStyle={
                { color: 'green' }
              } >About</NavLink>
            </li>
            <li>
              <NavLink to="/user/John" exact activeStyle={
                { color: 'green' }
              } >User</NavLink>
            </li>
          </ul>

          <Prompt
            when={!this.state.loggedIn}
            message={(location) => {
              return location.pathname.startsWith('/user') ? "Are you sure?" : true;
            }} />

          <input type="button" value={this.state.loggedIn ? 'Log out' : 'log in'} onClick={this.loginHandle.bind(this)}></input>
          <Route path="/home" exact activeStyle={
            { color: 'green' }
          } exact render={
            () => {
              return (<h1>First Router</h1>);
            }
          } />
          <Route path="/about" exact strict render={
            () => {
              return (<h1>About</h1>);
            }
          } />

          <Route path="/user/:username" render={({ match }) => {
            return this.state.loggedIn ? (<User username={match.params.username} />) : (<Redirect to="/home" />)
          }
          } />


        </div>
      </Router >
    );
  }
}

export default App;
