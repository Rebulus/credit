// @flow
import { handleActions } from 'redux-actions';
import * as AppStatusActions from '../actions';
import { AppStatusManager } from '../models';
import viewCredits from './viewCredits';
import addCredit from './addCredit';
import editCredit from './editCredit';

export default handleActions({
  [AppStatusActions.viewCredits]: viewCredits,
  [AppStatusActions.addCredit]: addCredit,
  [AppStatusActions.editCredit]: editCredit,
}, new AppStatusManager());
