import React, {Component} from 'react';
import { connect } from 'react-redux';

import MenuItemsComponent from './MenuItemsComponent';
import { addItemToCart, removeItemFromCart } from '../../actions/cart';

class MenuItems extends Component {
    constructor (props) {
        super (props);
        
    }

    render () {
        const {type} = this.props.navigation.state.params;
        const {starters, navigation} = this.props;
        return (
            <MenuItemsComponent
                totalAmount = {this.props.totalAmount}
                navigateToCart = {() => navigation.navigate('CartScreen')}
                addItem = {(item) => this.props.addItem(item)}
                removeItem = {(item) => this.props.removeItem(item)}
                items = {starters}
                numberOfItems = {this.props.numberOfItems}
                type = {type}
                toggleDrawer = {() => this.props.navigation.toggleDrawer()} />
        )
    }
}

const mapStateToProps = (state) => {
    const {menu, cart} = state;
    return {
        starters: menu.starters,
        totalAmount: cart.totalAmount,
        numberOfItems: cart.numberOfItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: item => {
            dispatch(addItemToCart(item));
        },
        removeItem: item => {
            dispatch(removeItemFromCart(item));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MenuItems);