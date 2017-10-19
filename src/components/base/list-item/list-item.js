import React from 'react';
import Avatar from '../avatar/avatar';

import './list-item.css';

const ListItem = (props) => {
    return (
        <div className="list-item-block" onClick={()=>props.onClick()}>
            <Avatar className="list-item-avatar" />
            <div className="list-item-info">
                <p>Name {props.infoNumber}</p>
                <p className="details">Details {props.infoNumber}</p>
            </div>
            <div className="list-item-more-icon"></div>
        </div>
    );
}

export default ListItem;
