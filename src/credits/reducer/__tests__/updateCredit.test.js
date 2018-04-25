import updateCredit from '../updateCredit';
import * as CreditsActions from '../../actions';
import { Credits, Credit } from '../../models';

describe('updateCredit', () => {
  it('updates credit in credits state', () => {
    const action = CreditsActions.updateCredit({
      id: 'credit-2',
      data: {
        name: 'Credit2Wow',
        value: 30000,
      },
    });
    const state = new Credits({
      order: ['credit-2', 'credit-1'],
      items: {
        'credit-1': new Credit({
          id: 'credit-1',
          name: 'Credit1',
          value: 12000,
          months: 12,
          percent: 0.11,
        }),
        'credit-2': new Credit({
          id: 'credit-2',
          name: 'Credit2',
          value: 12000,
          months: 12,
          percent: 0.11,
        }),
      },
    });
    expect(updateCredit(state, action)).toEqual(new Credits({
      order: ['credit-2', 'credit-1'],
      items: {
        'credit-1': new Credit({
          id: 'credit-1',
          name: 'Credit1',
          value: 12000,
          months: 12,
          percent: 0.11,
        }),
        'credit-2': new Credit({
          id: 'credit-2',
          name: 'Credit2Wow',
          value: 30000,
          months: 12,
          percent: 0.11,
        }),
      },
    }));
  });
});
