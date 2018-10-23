import React, {Component} from 'react';
import {View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {AppHeader} from '../reusables/commons';
import commonStyle from '../commonStyle';
import { WHITE_COLOR, PRIMARY_COLOR, BLACK_COLOR } from '../../util/Constants';


export default class MenuItemsComponent extends Component {
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

    getCorrectHeader () {
        return 'Starters'
    }

    render () {
        const {toggleDrawer, type} = this.props;
        return (
            <SafeAreaView style={commonStyle.safeAreaViewContainer}>
                <AppHeader
                    hasLeftComponent
                    leftIcon = 'menu'
                    leftOnPress ={() => toggleDrawer()}
                    title={this.getCorrectHeader()} />

                <View style={{flex:1, backgroundColor: WHITE_COLOR, }}>
                    {this.renderSearchBar()}
                    {/* {this.renderContent()} */}
                </View>

            </SafeAreaView>
        )
    }
}