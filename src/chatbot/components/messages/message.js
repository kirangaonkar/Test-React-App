import React from 'react';
import './../bot-container/bot.css';

const Message = (props) => {
    return (
        <div className={props.type}>
            <div className="single-message">
                <span className="message-text"> {props.content}</span>
            </div>
        </div>
    );
}

export default Message;