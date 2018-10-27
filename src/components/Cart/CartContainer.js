import React, {Component} from 'react';
import {connect} from 'react-redux';
import CheckoutComponent from './CartComponent';
import { addItemToCart, removeItemFromCart } from '../../actions/cart';
import {SET_ORDER} from '../../util/Constants';
class Checkout extends Component {
    constructor (props) {
        super (props);
    }

    render () {
        const {list, totalAmount, grandTotal, promoCode, addItem, removeItem} = this.props;
        return (
            <CheckoutComponent
                deliveryType = {this.props.deliveryType}
                isPromoCodeApplied = {this.props.isPromoCodeApplied}
                checkoutCart = {(order) => this.props.checkoutOrder(order, this.props.navigation.navigate)}
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
        delivery: cart.delivery,
        isPromoCodeApplied: cart.isPromoCodeApplied,
        deliveryType: cart.deliveryType,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: item => {
            dispatch(addItemToCart(item));
        },
        removeItem: item => {
            dispatch(removeItemFromCart(item));
        },
        checkoutOrder: (order, navigate) => {
            dispatch({
                type: SET_ORDER,
                payload: order,
            })
            navigate('CheckoutScreen');
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Checkout);