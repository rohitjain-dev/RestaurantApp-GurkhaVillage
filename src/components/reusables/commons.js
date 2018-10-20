import React from 'react';
import {View, Text, Platform, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ElevatedView from 'react-native-elevated-view';
import * as CONST from '../../util/Constants';
import scale from '../../util/scale';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? scale(44) : scale(56);

export const AppHeader = ({title, hasLeftComponent, centerTitle = false, hasRightComponent, leftIcon, rightComponents, leftOnPress}) => {
    return (
        <ElevatedView elevation={10} style={{ backgroundColor: CONST.PRIMARY_COLOR, flexDirection: 'row', height: APPBAR_HEIGHT,  justifyContent: 'center', paddingHorizontal: 10}}>
            <View style={{position: 'absolute', right: 0, left: 0, top: 0, bottom: 0, justifyContent: 'center',  alignItems: centerTitle ? 'center' : 'flex-start', paddingLeft: centerTitle ? 0 : (hasLeftComponent ? 60 : 10)}}>
                <Text style={{color: CONST.WHITE_COLOR, fontSize: 18, fontWeight: 'bold'}} >{title.toUpperCase()}</Text>
            </View>

            {hasLeftComponent && <TouchableOpacity style={{width: 40,  justifyContent: 'center'}} onPress={() => leftOnPress()}>
                <Icon name={leftIcon ? leftIcon : 'arrow-back'} size={28} color={CONST.WHITE_COLOR} />
            </TouchableOpacity>}

            <View style={{flex:1}}/>
            
            <View>
                {hasRightComponent && rightComponents.map((component) => {
                    <TouchableOpacity style={{width: 40}} onPress={() => component.onPress()}>
                    
                    </TouchableOpacity>
                })}
            </View>
            
        </ElevatedView>
    )
}