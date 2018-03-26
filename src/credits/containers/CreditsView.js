// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import type { CreditsState } from '../types';
import { CreditView } from '../components';

type CreditsViewProps = {
  credits: CreditsState,
};

class CreditsView extends PureComponent<CreditsViewProps> {
  render() {
    const { credits: { order, items } } : CreditsViewProps = this.props;
    return order.map((id: string) => (
      <CreditView key={id} credit={items[id]} />
    ));
  }
}

const mapsStateToProps = state => ({
  credits: state.credits,
});

export default connect(mapsStateToProps)(CreditsView);
