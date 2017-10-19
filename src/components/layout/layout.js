import React, {Component} from 'react';
import List from '../list-component/list';
import Details from '../details-component/details';

class Layout extends Component {
    constructor(props) {
        super(props);

        let arrayWithGenerateListOfItems = [];
        for (var i = 0; i < 100; i++) {
            arrayWithGenerateListOfItems.push(i);
        }

        this.state = {
            arrayWithGenerateListOfItems: arrayWithGenerateListOfItems,
            selectedItem: arrayWithGenerateListOfItems[0]
        }
    }

    render() {
        return (
            <div>
                <List items={this.state.arrayWithGenerateListOfItems} onItemClick={(item)=>this.onItemClick(item)} />
                <Details selectedItem={this.state.selectedItem} />
            </div>
        )
    }

    onItemClick(item) {
        this.setState({
            selectedItem: item
        });
    }
}

export default Layout


