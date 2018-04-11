// @flow

import { handleActions } from 'redux-actions';
import * as CreditsActions from '../actions';
import initialState from './initialState';
import addCredit from './addCredit';
import removeCredit from './removeCredit';
import updateCredit from './updateCredit';

export default handleActions({
  [CreditsActions.addCredit]: addCredit,
  [CreditsActions.removeCredit]: removeCredit,
  [CreditsActions.updateCredit]: updateCredit,
}, initialState);
