import React, {Component} from 'react';
import {View,Text, TouchableOpacity,SafeAreaView, FlatList} from 'react-native';
import { AppHeader } from '../reusables/commons';
import { WHITE_COLOR, SECONDARY_COLOR, PRIMARY_COLOR } from '../../util/Constants';
import commonStyle from '../commonStyle';
import * as FAKE from '../../util/FakeData';
import styles from './style';
import { getFormattedGenericDate } from '../../util/common';
import ElevatedView from 'react-native-elevated-view';
import scale from '../../util/scale';

export default class PastOrderComponent extends Component {
    constructor (props) {
        super (props);
    }

    renderOrderItem (item) {
        const {orderId, name, date, description} = item;
       return (
           <ElevatedView elevation = {10} style={styles.itemContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10}}>
                    <Text style={{fontWeight: '500', fontSize: scale(16)}}>{name}</Text>
                    <Text style={{color: PRIMARY_COLOR}}>{getFormattedGenericDate(date, 'DD-MM-YYYY')}</Text>
                </View>
                <View style={{paddingBottom: scale(10)}}>
                    <Text style={{fontSize: scale(14)}}>{item.description}</Text>
                </View>
                <View style={{justifyContent: 'center', justifyContent: 'flex-end', flexDirection: 'row'}}>
                    <TouchableOpacity onPress ={() => this.props.onReorderClicked()} style={styles.reorderButton}>
                        <Text style={{color: WHITE_COLOR, fontSize: scale(14)}}>RE ORDER</Text>
                    </TouchableOpacity>
                    <View style={{width: scale(10)}} />
                    <TouchableOpacity onPress = {() => this.props.onVisitMenuClicked()} style={styles.visitMenuButton}>
                        <Text style={{fontSize: scale(14)}}>VISIT MENU</Text>
                    </TouchableOpacity>
                </View>
           </ElevatedView>
       )
    }

    render () {
        return (
            <SafeAreaView style={commonStyle.safeAreaViewContainer}>
                
                <AppHeader
                    title='Past Order'
                    centerTitle
                    leftIcon = 'menu'
                    hasLeftComponent
                    leftOnPress ={() => this.props.toggleDrawer()} />
                
                <View style={{flex:1, backgroundColor: WHITE_COLOR, }}>
                    <FlatList
                        style={{paddingHorizontal: scale(10)}}
                        data = {FAKE.ORDERS_LIST}
                        renderItem = {({item}) => this.renderOrderItem(item)}/>
                </View>

            </SafeAreaView>
        )
    }
}
