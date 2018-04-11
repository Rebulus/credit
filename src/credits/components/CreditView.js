// @flow
import React, { PureComponent } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import type { Credit } from '../types';

type CreditViewProps = {
  credit: Credit,
  onEdit: Function,
}

const styles = StyleSheet.create({
  creditView: {
    marginBottom: 10,
  },
});

class CreditView extends PureComponent<CreditViewProps> {
  onEdit = () => {
    const { credit, onEdit }: CreditViewProps = this.props;
    onEdit(credit.id);
  };

  render() {
    const { credit }: CreditViewProps = this.props;
    // TODO - add percent view
    return (
      <View style={styles.creditView}>
        <Text>{credit.id}: {credit.name}</Text>
        <Text>Months: {credit.months}, Percent: {credit.percent * 100}%</Text>
        <Button
          title="Edit"
          onPress={this.onEdit}
        />
      </View>
    );
  }
}

export default CreditView;
