import addCredit from '../addCredit';
import initialState from '../initialState';
import * as CreditsActions from '../../actions';

describe('addCredit', () => {
  it('adds credit to credits state', () => {
    const action = CreditsActions.addCredit({
      id: 'credit-1',
      name: 'Credit1',
      value: 12000,
      months: 12,
      percent: 0.11,
    });
    expect(addCredit(initialState, action)).toEqual({
      order: ['credit-1'],
      items: {
        'credit-1': {
          id: 'credit-1',
          name: 'Credit1',
          value: 12000,
          months: 12,
          percent: 0.11,
        },
      },
    });
  });
});
