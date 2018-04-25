// @flow
import React, { PureComponent, Fragment } from 'react';
import { map } from 'lodash';
import { View, Text, StyleSheet } from 'react-native';
import { Credit } from '../../credits/models';
import type { CreditsItems } from '../../credits/models';

type PaymentsByMonthProps = {
  index: number,
  credits: CreditsItems,
}

const styles = StyleSheet.create({
  month: {
    borderStyle: 'solid',
    borderColor: '#eee',
    borderWidth: 1,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  monthHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  credit: {
    borderStyle: 'solid',
    borderColor: '#eee',
    borderWidth: 1,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
});

export default class PaymentsByMonth extends PureComponent<PaymentsByMonthProps> {
  render() {
    const {
      credits,
      index,
    } = this.props;
    return (
      <View style={styles.month}>
        <Text style={styles.monthHeader}>Month: {index}</Text>
        <View style={styles.credit}>
          {
            map(credits, (credit: Credit) => (
              <Fragment key={credit.id}>
                <Text>{credit.name}</Text>
                <Text>Payment: {index < credit.months ? credit.getMonthPay() : 0}</Text>
              </Fragment>
            ))
          }
        </View>
      </View>
    );
  }
}
