// @flow
import type { CreditsState, PartialCredit } from '../types';
import initialState from './initialState';

export default (
  state: CreditsState = initialState,
  { payload: credit }: { payload: PartialCredit } = {},
): CreditsState => {
  const { items } = state;
  return {
    order: state.order,
    items: {
      ...items,
      [credit.id]: {
        ...items[credit.id],
        ...credit,
      },
    },
  };
};
