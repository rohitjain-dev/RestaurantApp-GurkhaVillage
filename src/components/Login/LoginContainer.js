import React, {Component} from 'react';
import LoginComponent from './LoginComponent';

import {resetAction} from '../../AppNavigator';

class Login extends Component {
    constructor (props) {
        super (props);
    };

    render () {
        return (
            <LoginComponent
                onLongPress = {() => this.props.navigation.dispatch(resetAction('ManagersDrawer'))}
                login = {() => this.props.navigation.dispatch(resetAction('Drawer'))}
                navigateToSignup = {() => this.props.navigation.navigate('SignupScreen')}
            />
        )
    }
}

export default Login;