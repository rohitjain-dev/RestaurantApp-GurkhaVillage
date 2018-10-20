import React, {Component} from 'react';
import SignupComponent from './SignupComponent';

import {resetAction} from '../../AppNavigator';

class Signup extends Component {
    constructor (props) {
        super (props);
    };

    render () {
        return (
            <SignupComponent
                navigateToLogin = {() => this.props.navigation.dispatch(resetAction('Drawer'))}
            />
        )
    }
}

export default Signup;