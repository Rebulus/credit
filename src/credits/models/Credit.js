// @flow
import { assign, pick } from 'lodash';
import { v4 } from 'uuid';

export type CreditUpdate = {
  id?: string,
  name?: string,
  value?: number,
  months?: number,
  percent?: number,
};

export type CreditPatch = {
  id: string,
  data: CreditUpdate,
};

const allowedProperties = [
  'id',
  'name',
  'value',
  'months',
  'percent',
];

export default class Credit {
  +id: string;
  +name: string;
  +value: number;
  +months: number;
  +percent: number;

  constructor(data: CreditUpdate | Credit = { id: v4() }) {
    this.id = v4();
    assign(this, pick(data, allowedProperties));
  }

  name = 'New credit';
  value = 0;
  months = 0;
  percent = 0;

  update(creditUpdate: CreditUpdate): Credit {
    return new Credit({
      ...pick(this, allowedProperties),
      ...creditUpdate,
    });
  }

  getPercentByMonth(): number {
    return this.percent / 12 / 100;
  }

  getMonthPay(): number {
    const percentByMonth = this.getPercentByMonth();
    const percentForMonths = (1 + percentByMonth) ** this.months;
    return this.value * ((percentByMonth * percentForMonths) / (percentForMonths - 1));
  }
}
