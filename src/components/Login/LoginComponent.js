import React, {Component} from 'react';
import {View, SafeAreaView, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import commonStyle from '../commonStyle';
import { WHITE_COLOR, LIGHT_GREY, PRIMARY_COLOR, SECONDARY_COLOR } from '../../util/Constants';
import scale, { verticalScale } from '../../util/scale';
import actualDimensions from '../../util/Device';
const {height, width} = actualDimensions;

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
            <View style={{flex:1, justifyContent: 'flex-end', backgroundColor: PRIMARY_COLOR, padding: scale(16)}}>
                <ScrollView showsVerticalScrollIndicator = {false} bounces = {false}  style={{flex:1}}>
                
                <View style={{height: verticalScale(20)}}/>

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

                <TouchableOpacity  style={{paddingVertical: verticalScale(10), borderColor: SECONDARY_COLOR, borderWidth: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: PRIMARY_COLOR}} onPress = {() => this.props.login()}>
                    <Text style={{fontSize: scale(16), fontWeight: 'bold', color: WHITE_COLOR}}>LOGIN</Text>
                </TouchableOpacity>
                
                <View style={{paddingVertical: verticalScale(10),justifyContent: 'center', alignItems:'center'}}>
                    <Text style={{color: WHITE_COLOR, fontSize: scale(14)}}>Don't have an account ?<Text onPress={() => this.props.navigateToSignup()} style={{color: SECONDARY_COLOR}}> Signup</Text></Text>
                </View>
                </ScrollView>
            </View>
        )
    }

    render () {
        return (
            <SafeAreaView style={commonStyle.safeAreaViewContainer}>
                {this.renderInputView()}
            </SafeAreaView>
        )
    }
}