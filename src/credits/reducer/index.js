// @flow

import { handleActions } from 'redux-actions';
import * as CreditsActions from '../actions';
import initialState from './initialState';
import addCredit from './addCredit';

export default handleActions({
  [CreditsActions.addCredit]: addCredit,
}, initialState);
