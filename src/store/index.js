// @flow
import { createStore, combineReducers } from 'redux';
import creditsReducer from '../credits/reducer';

export default createStore(combineReducers({
  credits: creditsReducer,
}));
