// @flow
import { combineReducers } from 'redux';

export default (reducers) => {
  const combinedReducers = combineReducers(reducers);
  return (state, action) => {
    const { type }: { type: string } = action;
    switch (type) {
      case 'applyDataFromStorage':
        return {
          ...state,
          credits: action.payload,
        };
      default:
        return combinedReducers(state, action);
    }
  };
};
