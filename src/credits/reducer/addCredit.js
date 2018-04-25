// @flow
import { Credits, Credit } from '../models';

export default (
  state: Credits = new Credits(),
  { payload: credit }: { payload: Credit } = {},
): Credits => state.addCredit(credit);
