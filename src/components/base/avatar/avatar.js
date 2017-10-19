import React from 'react';

import './avatar.css';

const Avatar = (props) => {
    return (
        <div className={"avatar " + props.className} ></div>
    );
}

export default Avatar;
