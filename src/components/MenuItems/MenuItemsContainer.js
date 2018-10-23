import React, {Component} from 'react';
import MenuItemsComponent from './MenuItemsComponent';
import * as FAKE from '../../util/FakeData';

class MenuItems extends Component {
    constructor (props) {
        super (props);
        
    }

    render () {
        const {type} = this.props.navigation.state.params;
        return (
            <MenuItemsComponent
                items = {FAKE.STARTERS}
                type = {type}
                toggleDrawer = {() => this.props.navigation.toggleDrawer()} />
        )
    }
}

export default MenuItems;