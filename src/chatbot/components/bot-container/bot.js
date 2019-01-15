import React, { Component } from 'react';
import './bot.css';
import Message from './../messages/message'

class Bot extends Component {
    state = {
        messages: []
    }

    componentDidMount() {
        setInterval(() => {
            this.addMessages();
        }, 2000);
    }


    addMessages = () => {
        let copyData = [...this.state.messages];
        let obj = {
            type: copyData.length ? (copyData[copyData.length - 1].type == 'sent' ? 'recieved' : 'sent') : 'recieved',
            content: copyData.length ? (copyData[copyData.length - 1].type == 'sent' ? 'Hi' : 'Hello, how can i help u?') : 'Hi'
        }
        copyData.push(obj);
        this.setState({
            messages: copyData
        });

    }

    render() {
        return (<div className="chat-bot-container">
            {
                this.state.messages.map((message, index) => {
                    return (<Message key={index} type={message.type} content={message.content} />)
                })
            }
        </div>);
    }
}

export default Bot;