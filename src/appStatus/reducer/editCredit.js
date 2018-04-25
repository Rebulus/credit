// @flow
import { AppStatusManager } from '../models';

export default (
  state: AppStatusManager = new AppStatusManager(),
  { payload: id }: { payload: string } = {},
) => state.editCredit(id);
