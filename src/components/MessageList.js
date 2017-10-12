import React from 'react';

const MessageItem = ({
    keyNumber = 0,
    id,
    body = '...',
    author
}) => {
    return (
        <li key={id} id={id}>{body}</li>
    );
}

const MessageList = ({
    messages = []
}) => {
    return (
        <ul>
            {
                messages.map((msg, i) => <MessageItem key={i} id={msg.id} author={msg.userId} body={msg.message} /> )
            }
        </ul>
    )
};

export default MessageList;
