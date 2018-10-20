import React, {Component} from 'react';

import MenuComponent from './MenuComponent';

class Menu extends Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <MenuComponent
                toggleDrawer = {() => this.props.navigation.toggleDrawer()} />
        )
    }
}

export default Menu;