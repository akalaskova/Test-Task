import React from 'react';

import './list-item.css';

const ListItem = (props) => {
    return (
        <div className="list-item-block" onClick={()=>props.onClick()}>
            <div className="list-item-avatar"></div>
            <div className="list-item-info">
                <p>Name {props.infoNumber}</p>
                <p className="details">Details {props.infoNumber}</p>
            </div>
            <div className="list-item-more-icon"></div>
        </div>
    );
}

export default ListItem;
