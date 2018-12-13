import React from 'react';

const user = (props) => {
    return (<li>
        <span>name:{props.name} , age:{props.age}</span>
        <input onChange={props.changeEvent} value={props.name}></input>
        <button onClick={props.deleteEvent}> delete</button>
    </li >);
}

export default user;