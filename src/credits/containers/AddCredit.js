// @flow
import React, { PureComponent } from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import {
  addCredit,
} from '../../thunks';

type AddCreditProps = {
  add: Function,
};

class AddCredit extends PureComponent<AddCreditProps> {
  render() {
    const { add } = this.props;
    return (
      <Button
        title="Add Credit"
        onPress={add}
      />
    );
  }
}

const mapDispatchToProps = {
  add: addCredit,
};

export default connect(null, mapDispatchToProps)(AddCredit);
