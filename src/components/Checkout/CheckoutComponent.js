import React, {Component} from 'react';
import {View, TouchableOpacity, SafeAreaView, ScrollView, Text} from 'react-native';
import actualDimensions from '../../util/Device';
const {height, width} = actualDimensions;
import commonStyle from '../commonStyle';
import scale, { verticalScale } from '../../util/scale';
import { AppHeader } from '../reusables/commons';
import { WHITE_COLOR, PRIMARY_COLOR, GREY_BORDER, SECONDARY_COLOR, GREY_COLOR } from '../../util/Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as FAKE_DATA from '../../util/FakeData';
import { getFormattedCurrency } from '../../util/common';
import showToast from '../../util/Toast/index';
export default class CheckoutComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selected: 1,
        }
    }

    renderAddressView () {
        return (
            <View>

                <View style={{ paddingVertical: scale(5), borderBottomColor: GREY_BORDER, borderBottomWidth: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: scale(16), paddingRight: scale(5), fontWeight: 'bold', }}>Choose Address</Text>
                    <TouchableOpacity >
                    <Icon name='add-circle' size={28} color={PRIMARY_COLOR} />
                    </TouchableOpacity>
                </View>

                {FAKE_DATA.ADDRESSES.map((address) => {
                    return (
                        <TouchableOpacity activeOpacity={1} onPress={() => this.setState({selected: address.id})} style={{ paddingBottom: scale(5), flexDirection: 'row', }}>
                            <View style={{ paddingTop: verticalScale(10), paddingRight: scale(10) }}>
                                <Icon
                                    name={address.type === 0 ? 'home' : 'work'}
                                    size={28}
                                    color={PRIMARY_COLOR} />
                            </View>
                            <View style={{ flex: 1, borderBottomColor: GREY_BORDER, paddingVertical: scale(10), borderBottomWidth: 0.5, }}>
                                <Text>{address.address}</Text>
                                <Text style={{ paddingVertical: scale(10) }}>+91-7889994745</Text>
                                <TouchableOpacity style={{ padding: scale(5), flexDirection: 'row', borderColor: PRIMARY_COLOR, borderWidth: 1, width: scale(140), }} onPress={() => console.log('')}>
                                    <Icon name='edit' size={16} color={PRIMARY_COLOR} />
                                    <Text style={{ paddingLeft: scale(5) }}>Update Address</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', paddingRight: scale(10) }}>
                                <Icon
                                    name={'check-circle'}
                                    size={24}
                                    color={this.state.selected === address.id ? PRIMARY_COLOR : WHITE_COLOR} />
                            </View>
                        </TouchableOpacity>
                    )
                })}

            </View>
        )
    }

    renderOrderSummaryView () {
        const {totalAmount, delivery, isPromoCodeApplied, deliveryType} = this.props;
        return (
            <View style={{paddingVertical: verticalScale(5)}}>
                <Text style={{ fontSize: scale(16), paddingRight: scale(5), paddingBottom: verticalScale(10), fontWeight: 'bold', }}>Order Summary</Text>
                
                <View style={{flexDirection: 'row', borderBottomColor: GREY_BORDER, borderBottomWidth: 0.5, justifyContent: 'space-between'}}>
                    <Text style={{ fontSize: scale(14), paddingRight: scale(5), paddingVertical: verticalScale(5)  }}>Order Total <Text onPress ={() => this.props.goBack()} style={{color: PRIMARY_COLOR}}>(View Detail)</Text></Text>
                    <Text style={{fontWeight: 'bold', fontSize: scale(14),paddingVertical: verticalScale(5) }}>{getFormattedCurrency(totalAmount)}</Text>
                </View>

                <View style={{flexDirection: 'row', borderBottomColor: GREY_BORDER, borderBottomWidth: 0.5, justifyContent: 'space-between'}}>
                    <Text style={{ fontSize: scale(14), paddingRight: scale(5), paddingVertical: verticalScale(5)  }}>Delivery </Text>
                    <Text style={{fontWeight: 'bold', fontSize: scale(14),paddingVertical: verticalScale(5) }}> {getFormattedCurrency(delivery)}</Text>
                </View>

                {isPromoCodeApplied && <View style={{flexDirection: 'row', borderBottomColor: GREY_BORDER, borderBottomWidth: 0.5, justifyContent: 'space-between'}}>
                    <Text style={{ fontSize: scale(14), paddingRight: scale(5), paddingVertical: verticalScale(5)  }}>Promo Code Discount </Text>
                    <Text style={{fontWeight: 'bold', fontSize: scale(14),paddingVertical: verticalScale(5) }}>- {getFormattedCurrency(20)}</Text>
                </View>}

                <View style={{flexDirection: 'row', borderBottomColor: GREY_BORDER, borderBottomWidth: 0.5, justifyContent: 'space-between'}}>
                    <Text style={{ fontSize: scale(16), fontWeight: 'bold', paddingRight: scale(5), paddingVertical: verticalScale(5)  }}>Total Payable</Text>
                    <Text style={{fontWeight: 'bold', fontSize: scale(16),paddingVertical: verticalScale(5) }}>{getFormattedCurrency((totalAmount + delivery - (isPromoCodeApplied ? 20 : 0)))}</Text>
                </View>
                
            </View>
        )
    }

    renderInputView () {
        const {deliveryType} = this.props;
        return (
            <ScrollView bounces = {false} style={{flex:1, padding: scale(16), backgroundColor: WHITE_COLOR}}>
                {deliveryType === 1 && this.renderAddressView()}
                {this.renderOrderSummaryView()}
            </ScrollView>
        )
    }

    renderBottomView () {
        const {totalAmount, delivery, isPromoCodeApplied, deliveryType} = this.props;
        return (
            <TouchableOpacity onPress={() => showToast('Feature yet to be developed.') } style={{backgroundColor: SECONDARY_COLOR,  height: scale(50), flexDirection: 'row' }}>
                <View style={{ flex: 1, paddingHorizontal: scale(10), justifyContent: 'center' }}>
                    <Text style={{ fontSize: scale(14), paddingBottom: scale(5), fontWeight: 'bold', color: WHITE_COLOR }}>Confirm the Payment</Text>
                    <Text style={{ fontSize: scale(16), fontWeight: 'bold', color: WHITE_COLOR }}>{getFormattedCurrency((totalAmount + delivery - (isPromoCodeApplied ? 20 : 0)))}</Text>
                    
                </View>
                <View style={{ height: scale(50), justifyContent: 'center', alignItems: 'center', width: scale(50) }}>
                    <View style={{ height: scale(22), justifyContent: 'center', alignItems: 'center', width: scale(22), borderRadius: scale(14), backgroundColor: WHITE_COLOR }}>
                        <Icon name='arrow-forward' size={18} color={SECONDARY_COLOR} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render () {
        const {goBack} = this.props;
        return (
            <SafeAreaView style={commonStyle.safeAreaViewContainer}>
                <AppHeader
                    leftOnPress = {() => goBack()}
                    hasLeftComponent
                    title = 'Checkout'
                />
                {this.renderInputView()}
                {this.renderBottomView()}
            </SafeAreaView>
        )
    }
}