// @flow
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { times } from 'lodash';
import { Credits } from '../../credits/models';
import { PaymentsByMonth } from '../components';

type PaymentsListProps = {
  credits: Credits,
}

class PaymentsList extends PureComponent<PaymentsListProps> {
  render() {
    const { credits } = this.props;
    return (
      <Fragment>
        {
          times(
            credits.getMaxMonths(),
            monthIndex => (
              <PaymentsByMonth
                key={`month-${monthIndex}`}
                index={monthIndex}
                credits={credits.items}
              />
            ),
          )
        }
      </Fragment>
    );
  }
}

const mapsStateToProps = ({ credits }: { credits: Credits } = {}) => ({
  credits,
});

export default connect(mapsStateToProps)(PaymentsList);
