import removeCredit from '../removeCredit';
import * as CreditsActions from '../../actions';

describe('removeCredit', () => {
  it('removes credit from credits state', () => {
    const action = CreditsActions.removeCredit('credit-1');
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
    expect(removeCredit(state, action)).toEqual({
      order: ['credit-2'],
      items: {
        'credit-2': {
          id: 'credit-2',
          name: 'Credit2',
          value: 12000,
          months: 12,
          percent: 0.11,
        },
      },
    });
  });
});
