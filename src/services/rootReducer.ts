import { combineReducers } from '@reduxjs/toolkit';
import hoverReducer from '../slices/hoverSlice';
import modalReducer from '../slices/modalSlice';
import cartReducer from '../slices/cartSlice';

const rootReducer = combineReducers({
    hover: hoverReducer,
    modal: modalReducer,
    cart: cartReducer,
});

export default rootReducer;