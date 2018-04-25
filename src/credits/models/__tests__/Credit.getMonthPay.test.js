import Credit from '../Credit';

describe('Credit.getMonthPay', () => {
  it('calculates percent by month in year', () => {
    const months = 2;
    const credit = new Credit({
      value: 1000,
      percent: 12,
      months,
    });
    const firstMonthPercent = 1000 * 0.01;
    const secondMonthPercent = 500 * 0.01;
    const creditReturnByMonth = 500;
    const expectedResult =
      (
        firstMonthPercent + creditReturnByMonth + // first months
        secondMonthPercent + creditReturnByMonth // second months
      ) / months;

    expect(credit.getMonthPay().toFixed(1)).toBe(expectedResult.toFixed(1));
  });
});
