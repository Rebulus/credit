import Credit from '../Credit';

describe('Credit.getPercentByMonth', () => {
  it('calculates percent by month in year', () => {
    const credit = new Credit({
      percent: 12,
    });

    expect(credit.getPercentByMonth()).toBe(0.01);
  });
});
