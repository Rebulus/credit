import addCredit from '../addCredit';
import * as CreditsActions from '../../actions';
import { Credits, Credit } from '../../models';

describe('addCredit', () => {
  it('adds credit to credits state', () => {
    const action = CreditsActions.addCredit(new Credit({
      id: 'credit-1',
      name: 'Credit1',
      value: 12000,
      months: 12,
      percent: 0.11,
    }));
    expect(addCredit(new Credits(), action)).toEqual(new Credits({
      order: ['credit-1'],
      items: {
        'credit-1': new Credit({
          id: 'credit-1',
          name: 'Credit1',
          value: 12000,
          months: 12,
          percent: 0.11,
        }),
      },
    }));
  });
});
