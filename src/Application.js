// @flow

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = {};
export default class Application extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>WoW!</Text>
      </View>
    );
  }
}
