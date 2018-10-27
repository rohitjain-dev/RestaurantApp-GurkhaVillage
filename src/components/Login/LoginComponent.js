import React, {Component} from 'react';
import {View, SafeAreaView, Image, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import commonStyle from '../commonStyle';
import { WHITE_COLOR, LIGHT_GREY, PRIMARY_COLOR, SECONDARY_COLOR, BLACK_COLOR } from '../../util/Constants';
import scale, { verticalScale } from '../../util/scale';
import actualDimensions from '../../util/Device';
const {height, width} = actualDimensions;

const BACKGROUND_IMAGE = require('../../../assets/Background_.png');
const LOGO = require('../../../assets/icon_logo_small_.png');

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
            <View style={{flex:1, justifyContent: 'flex-end',  padding: scale(16)}}>
                <ScrollView showsVerticalScrollIndicator = {false} bounces = {false}  style={{flex:1}}>
                
                <View style={{paddingVertical: verticalScale(60), justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{height: 130, width: 130}} source={LOGO}/>
                    <Text style={{fontSize: 20, color: WHITE_COLOR, paddingTop: 5, fontWeight: 'bold'}}>GURKHA VILLAGE</Text>
                    <Text style={{fontSize: 8, color: WHITE_COLOR, paddingTop: 5, fontWeight: 'bold'}}>NEPALESE RESTAURANT & BAR</Text>
                    <Text style={{fontSize: 30, color: WHITE_COLOR, paddingTop: 40, fontWeight: 'bold'}}>WELCOME</Text>
                </View>

                <View style={{paddingVertical: verticalScale(2), flexDirection: 'row',alignItems: 'center',  borderBottomColor: WHITE_COLOR,borderBottomWidth: scale(0.3)}}>
                    <Icon name='mail-outline' color={WHITE_COLOR} size={scale(24)} />
                    <TextInput
                        autoCorrect = {false}
                        style={{flex:1, paddingLeft: scale(10), color: WHITE_COLOR}}
                        value = {this.state.email}
                        placeholder = 'EMAIL'
                        placeholderTextColor = {LIGHT_GREY}
                        onChangeText = {(text) => this.setState({email: text})} />
                </View>

                <View style={{height: verticalScale(20)}}/>

                <View style={{paddingVertical: verticalScale(2), alignItems: 'center', flexDirection: 'row', borderBottomColor: WHITE_COLOR, borderBottomWidth: scale(0.3)}}>
                    <Icon name='lock' color={WHITE_COLOR} size={scale(24)} />
                    <TextInput
                        autoCorrect = {false}
                        secureTextEntry
                        style={{flex:1, paddingLeft: scale(10), color: WHITE_COLOR}}
                        value = {this.state.password}
                        placeholder = 'PASSWORD'
                        placeholderTextColor = {LIGHT_GREY}
                        onChangeText = {(text) => this.setState({password: text})} />
                </View>

                <View style={{height: verticalScale(20)}}/> 

                <TouchableOpacity onLongPress = {() => this.props.onLongPress()}  style={{paddingVertical: verticalScale(10), borderColor: SECONDARY_COLOR, borderWidth: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: PRIMARY_COLOR}} onPress = {() => this.props.login()}>
                    <Text style={{fontSize: scale(16), fontWeight: 'bold', color: WHITE_COLOR}}>LOGIN</Text>
                </TouchableOpacity>
                
                <View style={{paddingVertical: verticalScale(10),justifyContent: 'center', alignItems:'center'}}>
                    <Text style={{color: WHITE_COLOR, fontSize: scale(14)}}>Don't have an account ?<Text onPress={() => this.props.navigateToSignup()} style={{color: BLACK_COLOR,}}> Signup</Text></Text>
                </View>
                </ScrollView>
            </View>
        )
    }

    render () {
        return (
            <SafeAreaView style={commonStyle.safeAreaViewContainer}>
            <View style={{position: 'absolute', height, width, right: 0, bottom: 0, left: 0, top: 0}}>
                    <Image style={{flex:1}} resizeMode='cover' source = {BACKGROUND_IMAGE}/>
                </View>
                {this.renderInputView()}
            </SafeAreaView>
        )
    }
}