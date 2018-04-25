// @flow

export type Credit = {|
  +id: string,
  +name: string,
  +value: number,
  +months: number,
  +percent: number,
  +isEdited: boolean,
|};

export type PartialCredit = {|
  +id: string,
  +value?: number,
  +months?: number,
  +percent?: number,
|};

export type CreditsItems = {
  +[key: string]: Credit,
};

export type CreditsOrder = Array<string>;

export type Credits = {|
  +order: CreditsOrder,
  +items: CreditsItems,
|};
