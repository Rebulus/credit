import addCredit from '../addCredit';
import { AppStatusManager } from '../../models';
import * as AppStatusActions from '../../actions';

describe('addCredit', () => {
  it('sets application status to VIEW_CREDITS', () => {
    const state = new AppStatusManager({
      status: 'none',
    });
    const action = AppStatusActions.addCredit();
    expect(addCredit(state, action)).toEqual(new AppStatusManager({
      status: 'ADD_CREDIT',
    }));
  });
});
