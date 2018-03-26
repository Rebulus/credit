// @flow
import type { CreditsState, Credit } from '../types';
import initialState from './initialState';

export default (
  state: CreditsState = initialState,
  { payload: credit }: { payload: Credit } = {},
): CreditsState => {
  const { items, order }: CreditsState = state;
  const { id }: Credit = credit;
  return {
    order: [
      ...order,
      id,
    ],
    items: {
      ...items,
      [id]: {
        ...credit,
      },
    },
  };
};
