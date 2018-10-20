import React, {Component} from 'react';
import PastOrderComponent from './PastOrderComponent';

class PastOrder extends Component {
    constructor (props) {
        super (props);
    }

    render () {
        return(
            <PastOrderComponent
                goBack = {() => this.props.navigation.goBack()}/>
        )
    }
}

export default PastOrder;