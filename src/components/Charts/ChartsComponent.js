import React, {Component} from 'react';
import {View, SafeAreaView,Image} from 'react-native';
import commonStyle from '../commonStyle';
import { PRIMARY_COLOR, WHITE_COLOR } from '../../util/Constants';
import scale from '../../util/scale';
import { AppHeader } from '../reusables/commons';

const CHART_IMAGE = require('../../../assets/Chart_.png');

export default class LoginComponent extends Component {
    constructor (props) {
        super (props);
        this.state = {
            email: '',
            password: '',
            isManager: false
        }
    }

    renderInputView () {
        return (
            <View style={{flex:1, backgroundColor: WHITE_COLOR, alignItems: 'center', padding: scale(16)}}>
                <View style = {{height: scale(50)}}/>
                <Image
                    style={{padding: scale(16)}}
                    source ={CHART_IMAGE} />
            </View>
        )
    }

    render () {
        return (
            <SafeAreaView style={commonStyle.safeAreaViewContainer}>
                <AppHeader
                    leftIcon = 'menu'
                    title = 'Charts'
                    hasLeftComponent
                    leftOnPress = {() =>this.props.toggleDrawer()}/>
                {this.renderInputView()}
            </SafeAreaView>
        )
    }
}