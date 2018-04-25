// @flow
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import creditsReducer from '../credits/reducer';
import appStatusReducer from '../appStatus/reducer';
import { Credits, Credit } from '../credits/models';

export default createStore(
  combineReducers({
    credits: creditsReducer,
    appStatus: appStatusReducer,
  }),
  {
    credits: new Credits({
      order: ['credit-1'],
      items: {
        'credit-1': new Credit({
          id: 'credit-1',
          name: 'Credit 1',
          months: 12,
          percent: 0.12,
        }),
      },
    }),
  },
  applyMiddleware(thunk),
);
