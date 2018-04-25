// @flow
import { assign, pick } from 'lodash';
import { v4 } from 'uuid';

export type CreditUpdate = {
  id?: string,
  name?: string,
  value?: number,
  months?: number,
  percent?: number,
  isEdited?: boolean,
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
  'isEdited',
];

export default class Credit {
  +id: string;
  +name: string;
  +value: number;
  +months: number;
  +percent: number;
  +isEdited: boolean;

  constructor(data: CreditUpdate | Credit = { id: v4() }) {
    this.id = v4();
    assign(this, pick(data, allowedProperties));
  }

  name = 'New credit';
  value = 0;
  months = 0;
  percent = 0;
  isEdited = false;

  update(creditUpdate: CreditUpdate): Credit {
    return new Credit({
      ...pick(this, allowedProperties),
      ...creditUpdate,
    });
  }
}
