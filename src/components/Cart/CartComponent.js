import React, {Component} from 'react';
import {View, TouchableOpacity,Text,ScrollView,TextInput, SafeAreaView} from 'react-native';
import { AppHeader, ItemAdjustor } from '../reusables/commons';
import { WHITE_COLOR, LIGHT_GREY, BLACK_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../../util/Constants';
import commonStyle from '../commonStyle';
import showToast from '../../util/Toast';
import scale from '../../util/scale';
import {CART_ITEMS} from '../../util/FakeData';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import { getFormattedCurrency } from '../../util/common';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const  radio_props = [
    {label: 'Home Delivery', value: 0 },
    {label: 'Take Away', value: 1 }
  ];

export default class CheckoutComponent extends Component {
    constructor (props) {
        super (props);
        this.state = {
            deliveryOption: 0,
            deliveryAmount: 0,
        }
    }

    deleteButton = {onPress: () => this.clearItems(), icon: 'delete-forever'};
    
    clearItems = () => {
        showToast('Feature yet to be developed.');
    }

    renderDeliveryRadio = () => {
        return (
            <View style={{flexDirection: 'row' }}>
                <View style={{padding: scale(10), paddingBottom: 0, paddingLeft: 0, flexDirection: 'row'}}>
                    <RadioButtonInput
                        obj ={{}}
                        index={0}
                        isSelected={this.state.deliveryOption === 0}
                        onPress={() => this.setState({deliveryOption: 0, deliveryAmount: 0})}
                        borderWidth={1}
                        buttonInnerColor={PRIMARY_COLOR}
                        buttonOuterColor={this.state.deliveryOption === 0 ? PRIMARY_COLOR : SECONDARY_COLOR}
                        buttonSize={scale(14)}
                        buttonOuterSize={scale(18)}
                        buttonStyle={{}}
                        buttonWrapStyle={{marginLeft: - scale(10)}} />
                    
                    <TouchableOpacity onPress={() => this.setState({deliveryOption: 0})}>
                        <Text style={{paddingLeft: scale(10)}}>Take Away</Text>
                    </TouchableOpacity>
                </View>

                 <View style={{padding: scale(10), paddingBottom: 0, flexDirection: 'row'}}>
                    <RadioButtonInput
                        obj ={{}}
                        index={1}
                        isSelected={this.state.deliveryOption === 1}
                        onPress={() => this.setState({deliveryOption: 1, deliveryAmount: 20})}
                        borderWidth={1}
                        buttonInnerColor={'#000'}
                        buttonOuterColor={this.state.deliveryOption === 1? PRIMARY_COLOR : SECONDARY_COLOR}
                        buttonSize={scale(14)}
                        buttonOuterSize={scale(18)}
                        buttonStyle={{}}/>
                    <TouchableOpacity onPress={() => this.setState({deliveryOption: 1, deliveryAmount: 20})}>
                        <Text style={{paddingLeft: scale(10)}}>Home Delivery</Text>
                    </TouchableOpacity>
                    
                </View>
        
            </View>
        )
    }

    renderPromoCodeView () {
        return (
            <View style={{ paddingTop: scale(20), borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: LIGHT_GREY, justifyContent: 'space-between', }}>
                <Text style={{ fontWeight: 'bold', fontSize: scale(12), }}>PROMO CODE</Text>
                <View style={{ flexDirection: 'row', paddingTop: scale(10) }}>
                    <Icon name='confirmation-number' size={24} color={PRIMARY_COLOR} />
                    <TextInput
                        placeholderTextColor={LIGHT_GREY}
                        placeholder='Have a promo code ? Enter it here'
                        style={{ flex: 1, paddingLeft: scale(10), color: PRIMARY_COLOR, fontWeight: 'bold' }}
                        value={this.state.promoCode}
                        onChangeText={(text) => this.setState({ promoCode: text })} />
                    <TouchableOpacity style={{ paddingVertical: 5 }} onPress={() => showToast('Feature not yet supported')}>
                        <Text style={{ fontWeight: 'bold', fontSize: scale(12), color: PRIMARY_COLOR }}>APPLY</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    
    renderItems = () => {
        const {cartList, totalAmount, grandTotal, promoCode, addItem, removeItem} = this.props;
        return (
            <View>
                {cartList.map((item) => {
                    return (
                        <View style={{ paddingVertical: scale(10), borderColor: LIGHT_GREY, borderBottomWidth: 0.5, flexDirection: 'row' }}>
                            <View style={{ paddingTop: scale(3) }}>
                                <View style={{ padding: scale(1), borderColor: item.veg ? 'green' : 'red', borderWidth: 0.5 }}>
                                    <Icon name='brightness-1' color={item.veg ? 'green' : 'red'} size={10} />
                                </View>
                            </View>
                            <View style={{ flex: 1, paddingLeft: scale(5) }}>
                                <Text>{item.name}</Text>
                                <Text style={[styles.amountText, { textAlign: 'left', paddingTop: scale(5) }]}>{getFormattedCurrency(item.cost)}</Text>
                            </View>
                            <View style={{ height: scale(40) }} >
                                <ItemAdjustor
                                    decreaseQuantity={() => removeItem(item)}
                                    increaseQuantity={() => addItem(item)}
                                    quantity={item.quantity} />
                                <View style={{ paddingTop: scale(3) }}>
                                    <Text style={styles.amountText}>{getFormattedCurrency(item.cost*item.quantity)}</Text>
                                </View>
                            </View>
                        </View>
                    )
                })}
            </View>
        )
    }
    
    renderDeliveryOptions  = () => {
        return (
            <View style={{ paddingVertical: scale(10), borderColor: LIGHT_GREY, justifyContent: 'space-between', borderBottomWidth: 0.5, }}>
                <Text style={{ fontWeight: 'bold', fontSize: scale(14), }}>Choose Delivery Option</Text>
                {this.renderDeliveryRadio()}
            </View>
        )
    }

    renderAmountView = () => {
        const {cartList, totalAmount, grandTotal, promoCode} = this.props;

        return (
            <View style={{paddingTop: scale(12),}}>
                <View style={{ borderColor: LIGHT_GREY, justifyContent: 'space-between', flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold', fontSize: scale(14), }}>Subtotal</Text>
                    <Text style={{fontWeight: 'bold', fontSize: scale(14), }}>{getFormattedCurrency(totalAmount)}</Text>
                </View>
                <View style={{justifyContent: 'space-between', paddingTop: scale(5), paddingBottom: scale(12), flexDirection: 'row'}}>
                    <Text style={{fontSize: scale(10), }}>Delivery: </Text>
                    <Text style={{fontSize: scale(10), }}>{getFormattedCurrency(this.state.deliveryAmount)}</Text>
                </View>

                <View style={{paddingVertical: scale(12), borderTopWidth: 0.5,  borderColor: LIGHT_GREY, justifyContent: 'space-between', flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold', fontSize: scale(14), }}>Grand Total</Text>
                    <Text style={{fontWeight: 'bold', fontSize: scale(14), }}>{getFormattedCurrency((totalAmount+this.state.deliveryAmount))}</Text>
                </View>
            </View>
        )
    }

    renderBottomView () {
        const {cartList, totalAmount, grandTotal, promoCode} = this.props;
        return (
            <TouchableOpacity onPress = {() => showToast('Feature yet to be developed.')} style={{position: 'absolute', backgroundColor: SECONDARY_COLOR, bottom: 0, right:0, left: 0, height: scale(50), flexDirection: 'row'}}>
                <View style={{flex: 1, paddingHorizontal: scale(10), justifyContent: 'center'}}>
                    <Text style={{fontSize: scale(16), fontWeight: 'bold', color: WHITE_COLOR}}>Place order ({getFormattedCurrency((totalAmount+this.state.deliveryAmount))})</Text>
                </View>
                <View style={{height: scale(50), justifyContent: 'center', alignItems: 'center',width: scale(50)}}>
                    <View style={{height: scale(22), justifyContent: 'center', alignItems: 'center', width: scale(22), borderRadius: scale(14), backgroundColor: WHITE_COLOR}}>
                        <Icon name = 'arrow-forward' size={18} color={SECONDARY_COLOR} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render () {
        return (
            <SafeAreaView style={commonStyle.safeAreaViewContainer}>
                
                <AppHeader
                    hasLeftComponent
                   // hasRightComponent //if cart has one or more items.
                    rightComponents = {[this.deleteButton]}
                    leftOnPress={() => this.props.goBack()}
                    title='Your Cart' />

                <ScrollView showsVerticalScrollIndicator = {false} bounces = {false} style={{ flex: 1, backgroundColor: WHITE_COLOR, padding: scale(10) }}>
                    {this.renderItems()}
                    {this.renderDeliveryOptions()}
                    {this.renderAmountView()}
                    {this.renderPromoCodeView()}
                    <View style={{height: scale(80)}} />
                </ScrollView>
                {this.renderBottomView()}
            </SafeAreaView>
        )
    }
}