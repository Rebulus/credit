import Credits from '../Credits';
import Credit from '../Credit';

describe('Credits.getMaxMonths', () => {
  it('calculates max month by credits', () => {
    const firstCredit = new Credit({
      months: 12,
    });
    const secondCredit = new Credit({
      months: 15,
    });
    const thirdCredit = new Credit({
      months: 5,
    });
    const credits = new Credits()
      .addCredit(firstCredit)
      .addCredit(secondCredit)
      .addCredit(thirdCredit);

    expect(credits.getMaxMonths()).toBe(15);
  });
});
