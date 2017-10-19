import React from 'react';
import ListItem from '../base/list-item/list-item';

import './list.css';

const List = (props) => {
        return (
            <div className="list-block">
                {
                    props.items.map((item)=><ListItem key={item} infoNumber={item} onClick={()=>props.onItemClick(item)} />)
                }
            </div>
        );
}

export default List;
