import React, {Component} from 'react';
import DrawerComponent from './DrawerComponent';
import { resetAction } from '../../AppNavigator';
import ManagerDrawer from './ManagerDrawer';

class Drawer extends Component {
    constructor (props) {
        super (props);
    }

    navigateToScreen (screenName, params, reset = false) {
        const {navigation} = this.props;
        if (reset) navigation.dispatch(resetAction(screenName))
        else navigation.navigate(screenName);
    }

    render () {
        const {isManager} = this.props;
        return (
            isManager ?
                <ManagerDrawer
                    navigateTo = {(screenName, params, reset) => this.navigateToScreen (screenName, params, reset)} /> :
                <DrawerComponent
                    navigateTo = {(screenName, params, reset) => this.navigateToScreen (screenName, params, reset)} />
        )
    }
}

export default Drawer;