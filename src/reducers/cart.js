import * as CONST from '../util/Constants';

const initialState = {
    list: [],
    totalAmount: 0,
    delivery: 20,
    grandTotal: 0,
    promoCode: 'FIRST20',
    numberOfItems: 0,
    isPromoCodeApplied: false,
    deliveryType: 1, // 0 - Take Away, 1- Home delivery
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CONST.ADD_ITEM:
            return {
                ...state,
                list: action.payload.items,
                totalAmount: action.payload.totalAmount,
                numberOfItems: action.payload.numberOfItems,
            };
        case CONST.REMOVE_ITEM:
            return {
                ...state,
                list: action.payload.items,
                totalAmount: action.payload.totalAmount,
            };
        case CONST.MAKE_GTOTAL:
            return {
                ...state,
                delivery: action.payload.delivery,
                grandTotal: action.payload.grandTotal,
            };

        case CONST.SET_ORDER:  
            return {
                ...state,
                isPromoCodeApplied: action.payload.isPromoCodeApplied,
                deliveryType: action.payload.deliveryType,
                delivery: ((action.payload.deliveryType) === 1) ? 20 : 0,
            }
        default: return state;
    }
}