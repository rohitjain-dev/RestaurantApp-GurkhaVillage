import React, {Component} from 'react';
import ManageOrderComponent from './ManageOrderComponent';

class ManageOrder extends Component {
    constructor (props) {
        super (props);
    };

    render () {
        return (
            <ManageOrderComponent
                toggleDrawer = {() => this.props.navigation.toggleDrawer()}/>
        )
    }
}

export default ManageOrder;