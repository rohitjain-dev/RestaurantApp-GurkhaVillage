import React, {Component} from 'react';
import {connect} from 'react-redux';
import CheckoutComponent from './CartComponent';
import { addItemToCart, removeItemFromCart } from '../../actions/cart';

class Checkout extends Component {
    constructor (props) {
        super (props);
    }

    render () {
        const {list, totalAmount, grandTotal, promoCode, addItem, removeItem} = this.props;
        return (
            <CheckoutComponent
                checkoutCart = {() => this.props.navigation.navigate('CheckoutScreen')}
                addItem = {(item) => addItem(item)}
                removeItem = {(item) => removeItem(item)}
                cartList = {list}
                totalAmount = {totalAmount}
                grandTotal = {grandTotal}
                promoCode = {promoCode}
                goBack = {() => this.props.navigation.goBack()} />
        )
    }
}

const mapStateToProps = (state) => {
    const {cart} = state;
    return {
        list: cart.list,
        totalAmount: cart.totalAmount,
        grandTotal: cart.grandTotal,
        promoCode: cart.promoCode,
        delivery: cart.delivery
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

export default connect(mapStateToProps, mapDispatchToProps) (Checkout);