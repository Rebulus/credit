// @flow
import { filter, omit, reduce } from 'lodash';
import Credit from './Credit';
import type { CreditPatch, CreditJSON } from './Credit';

export type CreditsItems = {
  +[key: string]: Credit,
};

export type CreditsOrder = Array<string>;

export type CreditsPatch = {
  order?: CreditsOrder;
  items?: CreditsItems;
};

export type CreditsJSON = {
  +type: 'Credits',
  +data: {
    +order: Array<string>,
    +items: {
      +[key: string]: CreditJSON,
    },
  },
}

export default class Credits {
  +order: CreditsOrder;
  +items: CreditsItems;

  static toJSON(credits: Credits): CreditsJSON {
    return {
      type: 'Credits',
      data: {
        order: [...credits.order],
        items: reduce(credits.items, (items, credit: Credit) => ({
          ...items,
          [credit.id]: Credit.toJSON(credit),
        }), {}),
      },
    };
  }

  static fromJSON(json: CreditsJSON): Credits {
    if (json.type === 'Credits') {
      return new Credits({
        order: json.data.order,
        items: reduce(json.data.items, (items, creditJson: CreditJSON) => {
          const credit = Credit.fromJSON(creditJson);
          return {
            ...items,
            [credit.id]: credit,
          };
        }, {}),
      });
    }
    return new Credits();
  }

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
