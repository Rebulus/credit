// @flow
import { AsyncStorage } from 'react-native';
import { Credits } from '../../credits/models';
import type { CreditsJSON } from '../../credits/models';
import * as StorageActions from './storageActions';

export default (store: Object) => {
  AsyncStorage.getItem('@CreditStore')
    .then((creditJsonString) => {
      const creditJson: CreditsJSON = JSON.parse(creditJsonString);
      const credits: Credits = Credits.fromJSON(creditJson);
      store.dispatch(StorageActions.applyDataFromStorage(credits));
    });
  return (next: Function) => (action: Object) => {
    const result = next(action);
    const state = store.getState();
    const creditsJson: CreditsJSON = Credits.toJSON(state.credits);
    AsyncStorage.setItem('@CreditStore', JSON.stringify(creditsJson));
    return result;
  };
};
