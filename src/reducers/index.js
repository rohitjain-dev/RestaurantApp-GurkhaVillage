import { combineReducers } from 'redux';
import cart from './cart';
import menu from './menu';

export default combineReducers({
    cart,
    menu
})