// @flow
import { filter, omit, reduce } from 'lodash';
import Credit from './Credit';
import type { CreditPatch } from './Credit';

export type CreditsItems = {
  +[key: string]: Credit,
};

export type CreditsOrder = Array<string>;

export type CreditsPatch = {
  order?: CreditsOrder;
  items?: CreditsItems;
};

export default class Credits {
  +order: CreditsOrder;
  +items: CreditsItems;

  constructor(credits: CreditsPatch | Credits = {}) {
    this.order = credits.order || [];
    this.items = credits.items || {};
  }

  addCredit(credit: Credit): Credits {
    return new Credits({
      order: [
        ...this.order,
        credit.id,
      ],
      items: {
        ...this.items,
        [credit.id]: credit,
      },
    });
  }

  removeCredit(id: string): Credits {
    return new Credits({
      order: filter(this.order, (creditId: string) => creditId !== id),
      items: omit(this.items, id),
    });
  }

  updateCredit(creditPatch: CreditPatch): Credits {
    const credit = this.items[creditPatch.id];
    return new Credits({
      order: this.order,
      items: {
        ...this.items,
        [credit.id]: credit.update(creditPatch.data),
      },
    });
  }

  getMaxMonths() {
    const { items } = this;
    return reduce(items, (maxMonths: number, credit: Credit) => {
      if (credit.months > maxMonths) {
        return credit.months;
      }
      return maxMonths;
    }, 0);
  }
}
