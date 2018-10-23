import * as CONST from '../util/Constants';

const initialState = {
    items: [],
    totalAmount: 0,
    delivery: 20,
    grandTotal: 0,
    promoCode: 'FIRST50'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CONST.ADD_ITEM:
            return {
                ...state,
                items: action.payload.items,
                totalAmount: action.payload.totalAmount,
            };
        case CONST.REMOVE_ITEM:
            return {
                ...state,
                items: action.payload.items,
                totalAmount: action.payload.totalAmount,
            };
        case CONST.MAKE_GTOTAL:
            return {
                ...state,
                delivery: action.payload.delivery,
                grandTotal: action.payload.grandTotal,
            };
        default: return state;
    }
}