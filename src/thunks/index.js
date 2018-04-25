// @flow
import * as AppStatusActions from '../appStatus/actions';
import * as CreditsActions from '../credits/actions';
import type { CreditPatch } from '../credits/models';

export const editCredit = (id: string) => (dispatch) => {
  dispatch(AppStatusActions.editCredit(id));
};

export const cancelEditCredit = () => (dispatch) => {
  dispatch(AppStatusActions.viewCredits());
};

export const saveCredit = (creditPatch: CreditPatch) => (dispatch) => {
  dispatch(CreditsActions.updateCredit(creditPatch));
  dispatch(AppStatusActions.viewCredits());
};
