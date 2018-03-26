// @flow
import { filter, omit } from 'lodash/fp';
import type { CreditsState } from '../types';
import initialState from './initialState';

export default (
  state: CreditsState = initialState,
  { payload: id }: { payload: string } = {},
): CreditsState => {
  const { order, items } = state;
  return {
    order: filter(itemId => itemId !== id, order),
    items: omit(id, items),
  };
};
