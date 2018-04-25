// @flow
import { assign } from 'lodash';

const VIEW_CREDITS = 'VIEW_CREDITS';
const ADD_CREDIT = 'ADD_CREDIT';
const EDIT_CREDIT = 'EDIT_CREDIT';

type editCreditData = {
  id: string,
}

type AppStatus = {
  status: 'VIEW_CREDITS' | 'ADD_CREDIT' | 'EDIT_CREDIT',
  data?: editCreditData,
};

export default class AppStatusManager {
  constructor(data: AppStatus = { status: VIEW_CREDITS }) {
    assign(this, data);
  }

  setStatus(status: AppStatus): AppStatusManager {
    return new AppStatusManager(status);
  }

  viewCredits() {
    return this.setStatus({
      status: VIEW_CREDITS,
    });
  }

  addCredit() {
    return this.setStatus({
      status: ADD_CREDIT,
    });
  }

  editCredit(id: string) {
    return this.setStatus({
      status: EDIT_CREDIT,
      data: {
        id,
      },
    });
  }
}

export type {
  AppStatus,
};
