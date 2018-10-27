import React, {Component} from 'react';
import CheckoutComponent from './CheckoutComponent';
import {connect} from 'react-redux';

class Checkout extends Component {
    constructor (props) {
        super (props);
    };

    render () {
        return (
            <CheckoutComponent
                deliveryType = {this.props.deliveryType}
                isPromoCodeApplied = {this.props.isPromoCodeApplied}
                delivery = {this.props.delivery}
                // checkoutCart = {() => this.props.navigation.navigate('CheckoutScreen')}
                totalAmount = {this.props.totalAmount}
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

const mapDispatchToProps = (dispatch, ownProps) => {

}

export default connect(mapStateToProps, null)(Checkout);