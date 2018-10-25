import React from 'react';
import {View, Text, Platform, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ElevatedView from 'react-native-elevated-view';
import * as CONST from '../../util/Constants';
import scale from '../../util/scale';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? scale(44) : scale(56);

export const AppHeader = ({title, hasLeftComponent, backgroundColor = CONST.PRIMARY_COLOR, centerTitle = false, hasRightComponent, leftIcon, rightComponents, leftOnPress}) => {
    return (
        <ElevatedView elevation={0} style={[styles.container, {backgroundColor:backgroundColor }]}>
            <View style={[styles.absoluteTextView,{ alignItems: centerTitle ? 'center' : 'flex-start', paddingLeft: centerTitle ? 0 : (hasLeftComponent ? 60 : 10)}]}>
                <Text style={styles.titleText} >{title.toUpperCase()}</Text>
            </View>

            {hasLeftComponent && <TouchableOpacity style={styles.leftContainer} onPress={() => leftOnPress()}>
                <Icon name={leftIcon ? leftIcon : 'arrow-back'} size={28} color={CONST.WHITE_COLOR} />
            </TouchableOpacity>}
            
            {/* <View style={{flex:1}}/> */}
           
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end',flexDirection: 'row'}}>
                {hasRightComponent && rightComponents.map((component) => {
                    return (
                        <TouchableOpacity style={styles.rightContentContainer} onPress={() => component.onPress()}>
                            <Icon name={component.icon} size={28} color = {CONST.WHITE_COLOR} />
                        </TouchableOpacity>
                    )
                })}
            </View>
            
            
        </ElevatedView>
    )
}

export const ItemAdjustor = ({decreaseQuantity, increaseQuantity, quantity}) => {
    return (
        quantity !== 0 ? <View style={styles.adjustorContainer}>
            <TouchableOpacity onPress={() => decreaseQuantity()} style={styles.adjusterRightTouchable}>
                <Text style={styles.adjusterSign}>-</Text>
            </TouchableOpacity>

            <View style={{width: scale(20), backgroundColor: CONST.WHITE_COLOR, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.adjusterFont}>{quantity}</Text>
            </View>

            <TouchableOpacity onPress={() => increaseQuantity()} style={styles.adjusterLeftTouchable}>
            <Text style={styles.adjusterSign}>+</Text>
            </TouchableOpacity>
        </View> : 
        <TouchableOpacity  onPress={() => increaseQuantity()} style={styles.adjustorContainer}>
             <View style={styles.adjusterRightTouchable}>
                <Text style={styles.adjusterSign}>+</Text>
            </View>
            <View style={{paddingHorizontal: scale(5), backgroundColor: CONST.WHITE_COLOR, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.adjusterFont}>ADD</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: CONST.PRIMARY_COLOR,
        flexDirection: 'row',
        height: APPBAR_HEIGHT,
        justifyContent: 'center',
        paddingHorizontal: scale(10)
    },
    absoluteTextView: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center', 
    },
    titleText: {
        color: CONST.WHITE_COLOR,
        fontSize: scale(18),
        fontWeight: 'bold'
    },
    leftContainer: {
        width: scale(40),
        justifyContent: 'center'
    },
    rightContentContainer: {
        padding: scale(5),
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    adjustorContainer: {
        borderColor: CONST.PRIMARY_COLOR, backgroundColor: CONST.PRIMARY_COLOR, borderWidth: 1, flex:1, borderRadius: scale(3) , flexDirection: 'row'
    },
    adjusterRightTouchable: {
        borderBottomLeftRadius: scale(5), borderTopLeftRadius: scale(5), justifyContent: 'center', alignItems: 'center', backgroundColor: CONST.PRIMARY_COLOR, width: scale(20)
    },
    adjusterFont: {
        fontSize: scale(12), 
    },
    adjusterLeftTouchable: {
        borderBottomRightRadius: scale(5),
        borderTopRightRadius: scale(5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CONST.PRIMARY_COLOR,
        width: scale(20)
    },
    adjusterSign: {
        fontSize: scale(14),
        fontWeight: 'bold',
        color: CONST.WHITE_COLOR
    }

})