import {createStackNavigator, createDrawerNavigator, StackActions, NavigationActions} from 'react-navigation';
import React from 'react';

import Signup from './components/Signup/SignupContainer';
import Drawer from './components/Drawer/DrawerContainer';
import Menu from './components/Menu/MenuContainer';
import PastOrders from './components/PastOrders/PastOrderContainer';
import Checkout from './components/Cart/CartContainer';
import MenuItems from './components/MenuItems/MenuItemsContainer';

import scale from './util/scale';

const mainStackConfig = {
    // mode: 'modal'
};

const drawerConfig = {
    drawerWidth : scale(250), //TODO: Scale properly.
    contentComponent: (props) => (<Drawer {...props} />)
}

const DrawerRouter = createDrawerNavigator({
    MenuGroupScreen: {screen: Menu},
    PastOrderScreen: {screen: PastOrders},
    MenuItemsScreen: {screen: MenuItems}
}, drawerConfig);

const MainRouter = createStackNavigator({
    SignupScreen: {screen: Signup, navigationOptions: {header: null}},
    Drawer: {screen: DrawerRouter, navigationOptions: {header: null}},
    CheckoutScreen: {screen: Checkout, navigationOptions: {header: null}},
}, mainStackConfig);

const resetAction = (routeName) =>  StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName }),
    ],
});
 
export {resetAction};

export default MainRouter;