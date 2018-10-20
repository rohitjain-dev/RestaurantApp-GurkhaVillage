import React, {Component} from 'react';
import {View, SafeAreaView, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {AppHeader} from '../reusables/commons';
import commonStyle from '../commonStyle';
import { WHITE_COLOR, PRIMARY_COLOR, BLACK_COLOR } from '../../util/Constants';

const menuItemFirst = [
    {text: 'Starters', image: ''},
    {text: 'Tandoor\nDishes', image: ''},
    {text: 'Noodle\nDishes', image: ''}
];
const menuItemSecond = [
    {text: 'Classic\nIndian\nDishes', image: ''},
    {text: 'Vegetable\nSpecialities', image: ''},
    {text: 'Rice & Naan', image: ''},
];

const menuItemThird = [
    {text: 'Children\'s\nMenu', image: ''},
    {text: 'Three Course\nSet Meal', image: ''},
    {text: 'Set Meal\nDessert', image: ''},
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

    renderContent () {
        return (
            <View style={{backgroundColor: WHITE_COLOR, flex:1, paddingHorizontal: 16}}>
                <ScrollView bounces={false} style={{flex:1}}>
                    <View style={{height: 50, }}/>
                    <View style={{paddingVertical:10, flexDirection: 'row', justifyContent: 'space-around',  }}>
                    {menuItemFirst.map((item) => {
                        return (
                            <View style={{height:  80, width:  80, borderColor: PRIMARY_COLOR, borderWidth:1}}>
                            
                            </View>
                        )
                    })}
                    </View>
                    <View style={{paddingVertical:10, flexDirection: 'row', justifyContent: 'space-around',  }}>
                    {menuItemFirst.map((item) => {
                       return (
                        <View style={{height:  80, width:  80, borderColor: PRIMARY_COLOR, borderWidth:1}}>
                         </View>
                    )
                    })}
                    </View>
                    <View style={{paddingVertical:10, flexDirection: 'row', justifyContent: 'space-around', }}>
                    {menuItemFirst.map((item) => {
                        return (
                            <View style={{height:  80, width:  80, borderColor: PRIMARY_COLOR, borderWidth:1}}>
                             </View>
                        )
                    })}
                    </View>
                </ScrollView>
                
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