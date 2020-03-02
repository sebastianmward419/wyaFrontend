import  { combineReducers } from 'redux';

import ListReducer from './listReducer.js';
import UserReducer from './userReducer.js';

export default combineReducers (
{
    ListReducer,
    UserReducer
});