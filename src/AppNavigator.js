import {createStackNavigator, createDrawerNavigator, StackActions, NavigationActions} from 'react-navigation';
import React from 'react';

import Signup from './components/Signup/SignupContainer';
import Drawer from './components/Drawer/DrawerContainer';
import Menu from './components/Menu/MenuContainer';
import PastOrders from './components/PastOrders/PastOrderContainer';
import scale from './util/scale';

const mainStackConfig = {
    // mode: 'modal'
};

const drawerConfig = {
    drawerWidth : scale(250), //TODO: Scale properly.
    contentComponent: (props) => (<Drawer {...props} />)
}

const DrawerRouter = createDrawerNavigator({
    MenuScreen: {screen: Menu},
    PastOrderScreen: {screen: PastOrders},
}, drawerConfig);

const MainRouter = createStackNavigator({
    SignupScreen: {screen: Signup, navigationOptions: {header: null}},
    Drawer: {screen: DrawerRouter, navigationOptions: {header: null}},
}, mainStackConfig);

const resetAction = (routeName) =>  StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName }),
    ],
});
 
export {resetAction};

export default MainRouter;