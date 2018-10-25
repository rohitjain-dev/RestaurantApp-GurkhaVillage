import React, {Component} from 'react';
import SignupComponent from './SignupComponent';

class Signup extends Component {
    constructor (props) {
        super (props);
    };

    render () {
        return (
            <SignupComponent
                goBack = {() => this.props.navigation.goBack()}
                navigateToLogin = {() => console.log('')}
            />
        )
    }
}

export default Signup;