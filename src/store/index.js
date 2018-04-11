// @flow
import { createStore, combineReducers } from 'redux';
import creditsReducer from '../credits/reducer';

export default createStore(combineReducers({
  credits: creditsReducer,
}), {
  credits: {
    order: ['credit-1'],
    items: {
      'credit-1': {
        id: 'credit-1',
        name: 'Credit 1',
        months: 12,
        isEdited: false,
        percent: 0.12,
      },
    },
  },
});
