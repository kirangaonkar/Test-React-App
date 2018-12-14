import React, { Component } from 'react';

class Child extends Component {
    constructor() {
        super();
        console.log("child constructor");
        this.state = {
            name: "Child"
        }
    }

    componentWillMount() {
        console.log("child componentWillMount");
    }

    render() {
        console.log(" child render");
        return (
            <div className="App">
                {this.props.greeting}
            </div>
        );
    }

    componentWillUnmount() {
        console.log("child componentWillUnmount");
    }

    componentDidMount() {
        console.log("child componentDidMount");
    }

    componentDidUpdate() {
        console.log("child componentDidUpdate");
    }

    componentWillReceiveProps() {
        console.log("child componentWillReceiveProps");
    }

    shouldComponentUpdate() {
        return true;
    }

}
export default Child;
