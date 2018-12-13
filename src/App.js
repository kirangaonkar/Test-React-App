import React, { Component } from 'react';
import './App.css';
import User from './components/user';
import UniqueId from 'react-html-id';

class App extends Component {

  constructor() {
    super();
    UniqueId.enableUniqueIds(this);
    this.state = {
      users: [
        { id: this.nextUniqueId(), name: "John", age: 20 },
        { id: this.nextUniqueId(), name: "Jaggu", age: 30 },
        { id: this.nextUniqueId(), name: "Basya", age: 40 }
      ]
    };

  }

  changeUserName = (id, e) => {
    const index = this.state.users.findIndex(user => user.id === id);
    const user = Object.assign({}, this.state.users[index]);
    user.name = e.target.value;
    const users = Object.assign([], this.state.users);
    users[index] = user;
    this.setState({ users: users });
  }
  deleteUser = (index, e) => {
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({ users: users });
  }
  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.users.map((user) => {
              return (<User
                deleteEvent={this.deleteUser}
                age={user.age}
                name={user.name}
                key={user.id}
                changeEvent={this.changeUserName.bind(this, user.id)}
              />);
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
