import * as CONST from '../util/Constants';
import {STARTERS} from '../util/FakeData';

const initialState = {
    starters: STARTERS,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CONST.UPDATE_STARTER:
            return {
                ...state,
                starters: action.payload,
            };
        
        default: return state;
    }
}