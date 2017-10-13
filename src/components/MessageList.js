import React from 'react';

import UserEmail from './UserEmail';

const MessageItem = ({
    keyNumber = 0,
    id,
    body = '...',
    author,
    members
}) => {
    return (
        <li key={id} id={id} onMouseOver={() => { console.log(author) }} className="App-msg-item">
            {body}
            <UserEmail userId={author} email={ (members.find( (member) => member.id === author)).email } />
        </li>
    );
}

const MessageList = ({
    messages = [],
    members = []
}) => {
    return (
        <ul className="App-msgs">
            {
                messages.map((msg, i) => <MessageItem key={i} id={msg.id} author={msg.userId} body={msg.message} members={members} /> )
            }
        </ul>
    )
};

export default MessageList;
