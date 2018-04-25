import removeCredit from '../removeCredit';
import { Credits, Credit } from '../../models';
import * as CreditsActions from '../../actions';

describe('removeCredit', () => {
  it('removes credit from credits state', () => {
    const action = CreditsActions.removeCredit('credit-1');
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
    expect(removeCredit(state, action)).toEqual(new Credits({
      order: ['credit-2'],
      items: {
        'credit-2': new Credit({
          id: 'credit-2',
          name: 'Credit2',
          value: 12000,
          months: 12,
          percent: 0.11,
        }),
      },
    }));
  });
});
