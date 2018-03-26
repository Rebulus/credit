// @flow
import React, { PureComponent, Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import type { Credit } from '../types';

type CreditViewProps = {
  credit: Credit,
}

const styles = StyleSheet.create({
  creditView: {
    marginBottom: 10,
  },
});

class CreditView extends PureComponent<CreditViewProps> {
  render() {
    const { credit }: CreditViewProps = this.props;
    // TODO - add percent view
    return (
      <Fragment>
        <View style={styles.creditView}>
          <Text>{credit.id}: {credit.name}</Text>
          <Text>Months: {credit.months}, Percent: {credit.percent * 100}%</Text>
        </View>
      </Fragment>
    );
  }
}

export default CreditView;
