import React from 'react';

import UserEmail from './UserEmail';
import UserAvatar from './UserAvatar';

const MessageItem = ({
    keyNumber = 0,
    id,
    body = '...',
    author,
    members,
    time
}) => {
    const memberDetails = members.find( (member) => member.id === author);
    const dateStamp = (new Date(time)).toLocaleString('en-GB');
    return (
        <li key={id} id={id} className="App-msg-item">
            <p>
                <UserAvatar img={memberDetails.avatar /* || 'placeholder.image'*/} name={ `${memberDetails.firstName} ${memberDetails.lastName}` } />
                {body}
            </p>
            { dateStamp }
            <UserEmail userId={author} email={ memberDetails.email } />
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
                messages.map((msg, i) => <MessageItem key={i} id={msg.id} author={msg.userId} body={msg.message} time={msg.timestamp} members={members} /> )
            }
        </ul>
    )
};

export default MessageList;
