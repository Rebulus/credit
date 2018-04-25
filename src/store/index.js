// @flow
import { createStore, combineReducers } from 'redux';
import creditsReducer from '../credits/reducer';
import { Credits, Credit } from '../credits/models';

export default createStore(combineReducers({
  credits: creditsReducer,
}), {
  credits: new Credits({
    order: ['credit-1'],
    items: {
      'credit-1': new Credit({
        id: 'credit-1',
        name: 'Credit 1',
        months: 12,
        isEdited: false,
        percent: 0.12,
      }),
    },
  }),
});
