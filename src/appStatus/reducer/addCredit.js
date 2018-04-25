// @flow
import { AppStatusManager } from '../models';

export default (state: AppStatusManager = new AppStatusManager()) =>
  state.addCredit();
