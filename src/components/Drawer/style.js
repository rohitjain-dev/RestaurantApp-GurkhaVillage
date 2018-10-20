import {StyleSheet} from 'react-native';

import * as CONST from '../../util/Constants';
import scale from '../../util/scale';

export default StyleSheet.create({
    userRectContainer: {
        height: scale(150),
        backgroundColor: CONST.SECONDARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    triangle: {
        width: 0,
        height: 0,
        borderLeftWidth: scale(90),
        borderBottomWidth: scale(600),
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: CONST.SECONDARY_COLOR,
        transform: [
            {rotate: '-90deg'}
        ],
        marginTop: - scale(120),
        position: 'absolute'
    },
    drawerUserContainer: {
        height: scale(220)
    },
    userContainer: {
        position: 'absolute',
        marginTop: - scale(20),
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
    },
    userPictureContainer: {
        height: scale(80),
        width: scale(80),
        borderRadius: scale(50),
        backgroundColor: 'grey',
        borderColor: CONST.WHITE_COLOR,
        borderWidth: scale(3),
    },
    userNameText: {
        color: CONST.WHITE_COLOR,
        paddingVertical: 5
    },
    drawerInnerItemContainer: {
        height: scale(40),
        width: scale(40),
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawerItemText: {
        color: CONST.WHITE_COLOR,
        fontWeight: '500',
        fontSize: scale(18)
    },
    drawerItemTextContainer: {
        flex:1,
        justifyContent: 'center',
        paddingLeft: scale(14)
    },
    drawerItemContainer: {
        padding: scale(5),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
})