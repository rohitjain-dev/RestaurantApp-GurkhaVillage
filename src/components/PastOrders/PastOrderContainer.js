import React, {Component} from 'react';
import PastOrderComponent from './PastOrderComponent';

class PastOrder extends Component {
    constructor (props) {
        super (props);
    }

    render () {
        return(
            <PastOrderComponent
                onReorderClicked = {() => this.props.navigation.navigate('CartScreen')}
                onVisitMenuClicked = {() => this.props.navigation.navigate('MenuScreen')}
                toggleDrawer = {() =>  this.props.navigation.toggleDrawer()}/>
        )
    }
}

export default PastOrder;