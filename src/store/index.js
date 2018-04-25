// @flow
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import creditsReducer from '../credits/reducer';
import appStatusReducer from '../appStatus/reducer';

export default createStore(
  combineReducers({
    credits: creditsReducer,
    appStatus: appStatusReducer,
  }),
  applyMiddleware(thunk),
);
