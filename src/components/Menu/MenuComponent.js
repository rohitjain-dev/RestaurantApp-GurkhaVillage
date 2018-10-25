import React, {Component} from 'react';
import {View, SafeAreaView, Text,Image, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {AppHeader} from '../reusables/commons';
import commonStyle from '../commonStyle';
import { WHITE_COLOR, PRIMARY_COLOR, BLACK_COLOR, LIGHT_GREY } from '../../util/Constants';
import scale from '../../util/scale';
const ITEM_1  = require ('../../../assets/icon_menu1_.png');
const ITEM_2  = require ('../../../assets/icon_menu2_.png');
const ITEM_3  = require ('../../../assets/icon_menu3_.png');
const ITEM_4  = require ('../../../assets/icon_menu4_.png');
const ITEM_5  = require ('../../../assets/icon_menu5_.png');
const ITEM_6  = require ('../../../assets/icon_menu6_.png');
const ITEM_7  = require ('../../../assets/icon_menu7_.png');
const ITEM_8  = require ('../../../assets/icon_menu8_.png');
const ITEM_9  = require ('../../../assets/icon_menu9_.png');



const menuItemFirst = [
    {text: 'Starters', image: ITEM_1},
    {text: 'Tandoor\nDishes', image: ITEM_2},
    {text: 'Noodle\nDishes', image: ITEM_3}
];
const menuItemSecond = [
    {text: 'Classic\nIndian\nDishes', image: ITEM_4},
    {text: 'Vegetable\nSpecialities', image: ITEM_5},
    {text: 'Rice & Naan', image: ITEM_6},
];

const menuItemThird = [
    {text: 'Children\'s\nMenu', image: ITEM_7},
    {text: 'Three Course\nSet Meal', image: ITEM_8},
    {text: 'Set Meal\nDessert', image: ITEM_9},
];

export default class MenuComponent extends Component {
    constructor (props) {
        super (props);
    }

    renderSearchBar () {
        return (
            <View style={{height: 60, paddingVertical: 10, backgroundColor: PRIMARY_COLOR, paddingHorizontal: 16}}>
                <ElevatedView elevation={5} style={{backgroundColor: WHITE_COLOR, borderRadius: 2, flex:1, flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity activeOpacity={1} style={{ width: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name='search' color={BLACK_COLOR} size={24} />
                    </TouchableOpacity>
                    <View style={{ flex: 1 }}>
                        <TextInput style={{flex:1}} placeholder='Search' />
                    </View>
                    <TouchableOpacity style={{ width: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name='mic' size={24} color={BLACK_COLOR} />
                    </TouchableOpacity>
                </ElevatedView>              
            </View>
        )
    }

    renderMenuItem (item) {
        return (
            <TouchableOpacity onPress={()=> this.props.navigateToMenuItem(1)} style={{height: scale(100), width: scale(100), justifyContent: 'center', alignItems: 'center', borderColor: LIGHT_GREY, borderWidth:1}}>
                <Image source = {item.image} />
               
            </TouchableOpacity>
            
        )
    }

    renderBoxView () {
        return (
            <View style={{flex:1, paddingVertical: scale(10), alignSelf:'stretch', }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row',  }}>
                {menuItemFirst.map((item) => {
                    return (
                        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', padding: scale(10),}}>
                            {this.renderMenuItem(item)}
                        </View>
                    )
                })}
                </View>
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-around',  }}>
                {menuItemSecond.map((item) => {
                    return (
                        <View style={{flex:1,justifyContent: 'center', alignItems: 'center', padding: scale(10),}}>
                            {this.renderMenuItem(item)}
                        </View>
                    )
                })}
                </View>

                <View style={{  flexDirection: 'row', justifyContent: 'space-around',  }}>
                {menuItemThird.map((item) => {
                    return (
                        <View style={{flex:1,justifyContent: 'center', alignItems: 'center', padding: scale(10),}}>
                            {this.renderMenuItem(item)}
                        </View>
                    )
                })}
                </View>
            </View>
        )
    }

    renderContent () {
        return (
            <View style={{backgroundColor: WHITE_COLOR, flex:1, padding: scale(24), justifyContent: 'center', alignItems: 'center'}}>
                <View style={{height: scale(20)}}/>
                {this.renderBoxView()}
                {/* <View style={{flex:1}}/> */}
                <View style={{height: scale(20)}}/>

            </View>
        )
    }

    render () {
        const {toggleDrawer} = this.props;
        return (
            <SafeAreaView style={commonStyle.safeAreaViewContainer}>
                <AppHeader
                    hasLeftComponent
                    leftIcon = 'menu'
                    leftOnPress ={() => toggleDrawer()}
                    title='MENU' />

                <View style={{flex:1, backgroundColor: WHITE_COLOR, }}>
                    {this.renderSearchBar()}
                    {this.renderContent()}
                </View>

            </SafeAreaView>
        )
    }
}