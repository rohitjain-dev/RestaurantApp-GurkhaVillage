import React, {Component} from 'react';

import MenuItemsComponent from './MenuItemsComponent';

class MenuItems extends Component {
    constructor (props) {
        super (props);
    }

    render () {
        const {type} = this.props.navigation.state.params;
        return (
            <MenuItemsComponent
                type = {type}
                toggleDrawer = {() => this.props.navigation.toggleDrawer()} />
        )
    }
}

export default MenuItems;