import viewCredits from '../viewCredits';
import { AppStatusManager } from '../../models';
import * as AppStatusActions from '../../actions';

describe('viewCredits', () => {
  it('sets application status to VIEW_CREDITS', () => {
    const state = new AppStatusManager({
      status: 'none',
    });
    const action = AppStatusActions.viewCredits();
    expect(viewCredits(state, action)).toEqual(new AppStatusManager({
      status: 'VIEW_CREDITS',
    }));
  });
});
