import updateCredit from '../updateCredit';
import * as CreditsActions from '../../actions';

describe('updateCredit', () => {
  it('updates credit in credits state', () => {
    const action = CreditsActions.addCredit({
      id: 'credit-2',
      name: 'Credit2Wow',
      value: 30000,
    });
    const state = {
      order: ['credit-2', 'credit-1'],
      items: {
        'credit-1': {
          id: 'credit-1',
          name: 'Credit1',
          value: 12000,
          months: 12,
          percent: 0.11,
        },
        'credit-2': {
          id: 'credit-2',
          name: 'Credit2',
          value: 12000,
          months: 12,
          percent: 0.11,
        },
      },
    };
    expect(updateCredit(state, action)).toEqual({
      order: ['credit-2', 'credit-1'],
      items: {
        'credit-1': {
          id: 'credit-1',
          name: 'Credit1',
          value: 12000,
          months: 12,
          percent: 0.11,
        },
        'credit-2': {
          id: 'credit-2',
          name: 'Credit2Wow',
          value: 30000,
          months: 12,
          percent: 0.11,
        },
      },
    });
  });
});
