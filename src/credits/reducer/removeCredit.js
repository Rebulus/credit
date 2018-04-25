// @flow
import { Credits } from '../models';

export default (
  state: Credits = new Credits(),
  { payload: id }: { payload: string } = {},
): Credits => state.removeCredit(id);
