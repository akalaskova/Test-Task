import React, {Component} from 'react';

import './tab-block.css';

class TabBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'overview'
        }
    }

    render() {
        return (
            <div className="details-tabs-block">
                {
                    this.props.items.map((item)=> {
                        return <span key={item}
                            className={"details-tab " + (this.state.selectedTab === item ? "details-active-tab" : "")}
                            onClick={() => this.onSelectTab(item)}>{item}</span>
                    })
                }
            </div>
        );
    }

    onSelectTab(tab) {
        this.setState({
            selectedTab: tab
        });
    }
}

export default TabBlock;
