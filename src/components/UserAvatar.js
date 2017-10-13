import React from 'react';

const UserAvatar = ({
    img,
    name
}) => {
    return (
            <img src={img} alt={name} title={name} />
        
    )
}

export default UserAvatar;
