import React, {Component} from 'react';
import {View, SafeAreaView, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import commonStyle from '../commonStyle';
import { WHITE_COLOR, LIGHT_GREY, PRIMARY_COLOR, SECONDARY_COLOR, LIGHT_BLUE, BLACK_COLOR } from '../../util/Constants';
import scale, { verticalScale } from '../../util/scale';

export default class SignupComponent extends Component {
    constructor (props) {
        super (props);
        this.state = {
            username: '',
            confirmPassword: '',
            email: '',
            password: '',
        }
    }

    renderInputView () {
        return (
            <View style={{flex:1, justifyContent: 'flex-end', backgroundColor: LIGHT_BLUE, padding: scale(16)}}>
               <ScrollView showsVerticalScrollIndicator = {false} bounces = {false}  style={{flex:1}}>
                <View style={{height: verticalScale(250)}}/>
                
                <View style={{paddingVertical: verticalScale(2), alignItems: 'center', flexDirection: 'row', borderBottomColor: WHITE_COLOR, borderBottomWidth: scale(0.3)}}>
                    <Icon name='account-box' color={WHITE_COLOR} size={scale(24)} />
                    <TextInput
                        autoCorrect = {false}
                        style={{flex:1, paddingLeft: scale(10),  color: WHITE_COLOR}}
                        value = {this.state.username}
                        placeholder = 'USER NAME'
                        placeholderTextColor = {LIGHT_GREY}
                        onChangeText = {(text) => this.setState({username: text})} />
                </View>

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

                <View style={{paddingVertical: verticalScale(2), flexDirection: 'row',alignItems: 'center',  borderBottomColor: WHITE_COLOR, borderBottomWidth: scale(0.3)}}>
                    <Icon name='lock' color={WHITE_COLOR} size={scale(24)} />
                    <TextInput
                    autoCorrect = {false}
                        secureTextEntry
                        style={{flex:1, paddingLeft: scale(10), color: WHITE_COLOR}}
                        value = {this.state.confirmPassword}
                        placeholder = 'RE-PASSWORD'
                        placeholderTextColor = {LIGHT_GREY}
                        onChangeText = {(text) => this.setState({confirmPassword: text})} />
                </View>

                <View style={{height: verticalScale(20)}}/>

                <TouchableOpacity style={{paddingVertical: verticalScale(10), borderColor: SECONDARY_COLOR, borderWidth: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: PRIMARY_COLOR}} onPress = {() => console.log('')}>
                    <Text style={{fontSize: scale(16), fontWeight: 'bold', color: WHITE_COLOR}}>SIGN UP</Text>
                </TouchableOpacity>
                
                <View style={{paddingVertical: verticalScale(10),justifyContent: 'center', alignItems:'center'}}>
                    <Text style={{color: WHITE_COLOR, fontSize: scale(14)}}>You have an account ?<Text onPress={() => this.props.navigateToLogin()} style={{color: BLACK_COLOR}}> Login</Text></Text>
                </View>
                </ScrollView>
             </View>
        )
    }

    render () {
        return (
            <SafeAreaView style={commonStyle.safeAreaViewContainer}>
                {/* <ScrollView bounces = {false}  style={{flex:1,backgroundColor: LIGHT_BLUE, padding: scale(16)}}> */}
                    {this.renderInputView()}
                {/* </ScrollView> */}
            </SafeAreaView>
        )
    }
}