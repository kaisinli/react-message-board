'use strict'

import {combineReducers} from 'redux';
import allMessagesReducer from './allMessagesReducer';
import singleMessageReducer from './singleMessageReducer';

export default combineReducers({
  messages: allMessagesReducer,
  singleMessage: singleMessageReducer
});