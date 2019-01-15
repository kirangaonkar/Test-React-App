import React, { Component } from 'react';
import './bot.css';

class Bot extends Component {
    render() {
        return (<div className="chat-bot-container">

            <div className={true ? 'recieved' : ''}>
                <div className="single-message">
                    <span className="message-text"> Hi  I am a bot... Do you have any queries today?</span>
                </div>
            </div>

            <div className="sent">
                <div className="single-message">
                    <span className="message-text">Hi ...</span>
                </div>
            </div>


            <div className={true ? 'recieved' : ''}>
                <div className="single-message">
                    <span className="message-text"> Hi  I am a bot... Do you have any queries today?</span>
                </div>
            </div>

            <div className="sent">
                <div className="single-message">
                    <span className="message-text">Hi ...</span>
                </div>
            </div>


            <div className={true ? 'recieved' : ''}>
                <div className="single-message">
                    <span className="message-text"> Hi  I am a bot... Do you have any queries today?</span>
                </div>
            </div>

            <div className="sent">
                <div className="single-message">
                    <span className="message-text">Hi ...</span>
                </div>
            </div>


        </div>);
    }
}

export default Bot;