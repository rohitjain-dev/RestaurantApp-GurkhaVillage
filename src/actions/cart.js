import * as CONST from '../util/Constants';
import _ from 'lodash';

export function addItemToCart (item) {
    return async (dispatch, getState) => {
        const {menu, cart} = getState();
        const {starters} = menu;
        const {list, totalAmount, numberOfItems} = cart;
        
        let existingItem = _.find(starters, (o) => {return o.id === item.id});
        existingItem.quantity = existingItem.quantity + 1;
        existingItem = {...existingItem};

        const cartItem = _.find(list, (o) => {return o.id === item.id});

        if (cartItem) {
            cartItem.quantity = cartItem.quantity + 1;
        } else {
            
            list.push(existingItem);
        }
        
        let newTotalAmount= totalAmount + item.cost;

        dispatch({
            type: CONST.UPDATE_STARTER,
            payload: starters,
        });

        dispatch({
            type: CONST.ADD_ITEM,
            payload: {
                items: list,
                totalAmount: newTotalAmount,
                numberOfItems: (numberOfItems + 1),
            }
        });
    }
}

export function removeItemFromCart (item) {
    return async (dispatch, getState) => {
        
        const {menu, cart} = getState();
        const {starters} = menu;
        const {list, totalAmount} = cart;

        let existingItem = _.find(starters, (o) => {return o.id === item.id});
        existingItem.quantity = existingItem.quantity - 1;
        existingItem = {...existingItem};
        
        const cartItem = _.find(list, (o) => {return o.id === item.id});
        
        if (cartItem) {
            cartItem.quantity = cartItem.quantity - 1;
            if (cartItem.quantity === 0) _.remove(list, (o) =>{return o.id === item.id})
        }
        
        let newTotalAmount= totalAmount - item.cost;

        dispatch({
            type: CONST.UPDATE_STARTER,
            payload: starters,
        });

        dispatch({
            type: CONST.ADD_ITEM,
            payload: {
                items: list,
                totalAmount: newTotalAmount,
            }
        });
    }
}