import { combineReducers } from '@reduxjs/toolkit';
import hoverReducer from '../slices/hoverSlice';


const rootReducer = combineReducers({
    hover: hoverReducer,

});

export default rootReducer;