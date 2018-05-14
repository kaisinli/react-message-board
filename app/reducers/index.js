'use strict'

import {combineReducers} from 'redux';
import allMessagesReducer from './allMessagesReducer';

export default combineReducers({
  messages: allMessagesReducer
});