import {StyleSheet} from 'react-native';
import scale from '../../util/scale';
import * as CONST from '../../util/Constants';

export default StyleSheet.create({
    itemContainer: {
        padding: scale(10),
        marginVertical: scale(5),
        backgroundColor: CONST.WHITE_COLOR,
        borderRadius: scale(3),
        borderColor: 'grey',
        borderWidth: 0.3
    },
    reorderButton: {
        borderColor: CONST.SECONDARY_COLOR,
        backgroundColor: CONST.PRIMARY_COLOR,
        borderWidth: scale(1),
        padding: scale(5)
    },
    visitMenuButton: {
        borderColor: CONST.SECONDARY_COLOR,
        borderWidth: scale(1),
        padding: scale(5)
    }
})