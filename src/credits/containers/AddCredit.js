// @flow
import React, { PureComponent } from 'react';
import {
  Grid,
  Col,
  Button,
  Text,
} from 'native-base';
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
      <Grid>
        <Col style={{ justifyContent: 'center' }}>
          <Button
            block
            onPress={add}
          >
            <Text>Add Credit</Text>
          </Button>
        </Col>
      </Grid>
    );
  }
}

const mapDispatchToProps = {
  add: addCredit,
};

export default connect(null, mapDispatchToProps)(AddCredit);
