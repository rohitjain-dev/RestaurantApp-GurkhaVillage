import React, {Component} from 'react';
import {View, TouchableOpacity, ScrollView, Text, SafeAreaView} from 'react-native';
import styles from './style';
import commonStyles from '../commonStyle';
import { WHITE_COLOR } from '../../util/Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import showToast from '../../util/Toast';
export default class DrawerComponent extends Component {
    constructor (props) {
        super (props);
    }

    renderUserSection () {
        return (
            <View style={styles.drawerUserContainer}>
                <View style={styles.userRectContainer}/>
                <View style={styles.triangle}/>
                <View style={styles.userContainer}>
                    <View style={styles.userPictureContainer}/>
                    <Text style={styles.userNameText}>Name here</Text>
                    <Text style={{color: WHITE_COLOR}}>demo@gmail.com</Text>
                </View>
            </View>
        )
    }

    renderDrawerItem = (name,action) => {
        return (
            <TouchableOpacity onPress={() =>action()} style={styles.drawerItemContainer}>
                <View style={styles.drawerInnerItemContainer}>
                    <Icon name='home' color={WHITE_COLOR} size={32} />
                </View>
                <View style={styles.drawerItemTextContainer}>
                    <Text style={styles.drawerItemText}>{name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render () {
        const {navigateTo} = this.props;
        return (
            <SafeAreaView style={commonStyles.safeAreaViewContainer}>
                <ScrollView bounces = {false} style={{flex:1}}>
                    {this.renderUserSection ()}
                    {this.renderDrawerItem('Home', () => navigateTo('MenuScreen'))}
                    {this.renderDrawerItem('My Orders', () => navigateTo('PastOrderScreen'))}
                    {this.renderDrawerItem('Profile', () => showToast('Feature yet to be developed'))}
                    {this.renderDrawerItem('Notification', () => showToast('Feature yet to be developed'))}
                    {this.renderDrawerItem('Contact Us', () => showToast('Feature yet to be developed'))}
                    {this.renderDrawerItem('Log out', () => navigateTo('SignupScreen', {}, true))}
                </ScrollView>
            </SafeAreaView>
        )
    }
}