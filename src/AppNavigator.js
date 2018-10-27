import {createStackNavigator, createDrawerNavigator, StackActions, NavigationActions} from 'react-navigation';
import React from 'react';

import Login from './components/Login/LoginContainer';
import Signup from './components/Signup/SignupContainer';

import Drawer from './components/Drawer/DrawerContainer';

import Menu from './components/Menu/MenuContainer';
import PastOrders from './components/PastOrders/PastOrderContainer';
import Cart from './components/Cart/CartContainer';
import Checkout from './components/Checkout/CheckoutContainer';
import MenuItems from './components/MenuItems/MenuItemsContainer';

import ManagerOrders from './components/ManageOrders/ManageOrdersContainer';
import Charts from './components/Charts/ChartsContainer';

import scale from './util/scale';

const mainStackConfig = {
    // mode: 'modal'
};

const drawerConfig = {
    drawerWidth : scale(250),
    contentComponent: (props) => (<Drawer {...props} />)
}

const managerDrawerConfig = {
    drawerWidth : scale(250),
    contentComponent: (props) => (<Drawer {...props} isManager = {true} />)
}

const UserDrawerRouter = createDrawerNavigator({
    MenuGroupScreen: {screen: Menu},
    PastOrderScreen: {screen: PastOrders},
    MenuItemsScreen: {screen: MenuItems}
}, drawerConfig);

const ManagerDrawer = createDrawerNavigator({
    OrdersScreen: {screen: ManagerOrders},
    ChartsScreen: {screen: Charts},
}, managerDrawerConfig,)

const MainRouter = createStackNavigator({
    LoginScreen: {screen: Login, navigationOptions: {header: null}},
    SignupScreen: {screen: Signup, navigationOptions: {header: null}},
    ManagersDrawer: {screen: ManagerDrawer, navigationOptions: {header: null}},
    Drawer: {screen: UserDrawerRouter, navigationOptions: {header: null}},
    CartScreen: {screen: Cart, navigationOptions: {header: null}},
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