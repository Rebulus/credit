// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, ScrollView } from 'react-native';
import store from './store';
import {
  CreditsView,
  AddCredit,
} from './credits/containers';
import {
  PaymentsList,
} from './payments/containers';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
  },
});

type Props = {};
export default class Application extends Component<Props> {
  store = store;

  render() {
    return (
      <Provider store={this.store}>
        <ScrollView style={styles.container}>
          <CreditsView />
          <AddCredit />
          <PaymentsList />
        </ScrollView>
      </Provider>
    );
  }
}
