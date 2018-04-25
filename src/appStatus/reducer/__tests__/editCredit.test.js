import editCredit from '../editCredit';
import { AppStatusManager } from '../../models';
import * as AppStatusActions from '../../actions';

describe('editCredit', () => {
  it('sets application status to VIEW_CREDITS', () => {
    const state = new AppStatusManager({
      status: 'none',
    });
    const action = AppStatusActions.editCredit('credit-1');
    expect(editCredit(state, action)).toEqual(new AppStatusManager({
      status: 'EDIT_CREDIT',
      data: {
        id: 'credit-1',
      },
    }));
  });
});
