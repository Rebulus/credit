// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Credits, Credit } from '../models';
import { CreditView, CreditEditor } from '../components';
import { updateCredit } from '../actions';

type CreditsViewProps = {
  credits: Credits,
  update: Function,
};

class CreditsView extends PureComponent<CreditsViewProps> {
  onEdit = (id: string) => {
    const { update }: CreditsViewProps = this.props;
    update({
      id,
      data: {
        isEdited: true,
      },
    });
  };

  onSave = (credit: Credit) => {
    const { update }: CreditsViewProps = this.props;
    update({
      id: credit.id,
      data: {
        ...credit,
        isEdited: false,
      },
    });
  };

  onStopEditing = (id: string) => {
    const { update }: CreditsViewProps = this.props;
    update({
      id,
      data: {
        isEdited: false,
      },
    });
  };

  render() {
    const { credits: { order, items } } : CreditsViewProps = this.props;
    return order.map((id: string) => {
      const credit: Credit = items[id];
      if (items[id].isEdited) {
        return (
          <CreditEditor
            key={id}
            credit={credit}
            onSave={this.onSave}
            onStopEditing={this.onStopEditing}
          />
        );
      }
      return (
        <CreditView
          key={id}
          credit={credit}
          onEdit={this.onEdit}
        />
      );
    });
  }
}

const mapsStateToProps = state => ({
  credits: state.credits,
});
const mapsDispatchToProps = {
  update: updateCredit,
};

export default connect(mapsStateToProps, mapsDispatchToProps)(CreditsView);
