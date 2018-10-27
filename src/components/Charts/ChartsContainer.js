import React, {Component} from 'react';
import ChartsComponent from './ChartsComponent';

class Charts extends Component {
    constructor (props) {
        super (props);
    };

    render () {
        return (
            <ChartsComponent 
                toggleDrawer = {() => this.props.navigation.toggleDrawer()}/>
        )
    }
}

export default Charts;