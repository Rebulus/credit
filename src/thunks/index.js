// @flow
import * as AppStatusActions from '../appStatus/actions';
import * as CreditsActions from '../credits/actions';
import { Credit } from '../credits/models';
import type { CreditPatch } from '../credits/models';

export const addCredit = () => (dispatch: Function) => {
  dispatch(CreditsActions.addCredit(new Credit()));
};

export const editCredit = (id: string) => (dispatch: Function) => {
  dispatch(AppStatusActions.editCredit(id));
};

export const cancelEditCredit = () => (dispatch: Function) => {
  dispatch(AppStatusActions.viewCredits());
};

export const saveCredit = (creditPatch: CreditPatch) => (dispatch: Function) => {
  dispatch(CreditsActions.updateCredit(creditPatch));
  dispatch(AppStatusActions.viewCredits());
};

export const removeCredit = (id: string) => (dispatch: Function) => {
  dispatch(CreditsActions.removeCredit(id));
  dispatch(AppStatusActions.viewCredits());
};
