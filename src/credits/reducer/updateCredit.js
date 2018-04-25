// @flow
import { Credits } from '../models';
import type { CreditPatch } from '../models';

export default (
  state: Credits = new Credits(),
  { payload: creditPatch }: { payload: CreditPatch } = {},
): Credits => state.updateCredit(creditPatch);
