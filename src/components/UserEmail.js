import React from 'react';

const UserEmail = ({
    userId,
    email = '...'
}) => {
    return (
        <aside className="App-msg-email">
            <p>{email}</p>
        </aside>
    );
};

export default UserEmail;
