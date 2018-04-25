// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import creditsReducer from '../credits/reducer';
import appStatusReducer from '../appStatus/reducer';
import {
  storageMiddleware,
  storageCombineReducers,
} from './storage';

export default createStore(
  storageCombineReducers({
    credits: creditsReducer,
    appStatus: appStatusReducer,
  }),
  applyMiddleware(
    thunk,
    storageMiddleware,
  ),
);
