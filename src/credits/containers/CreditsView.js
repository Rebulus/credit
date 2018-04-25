// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { Credits, Credit } from '../models';
import { CreditView, CreditEditor } from '../components';
import {
  saveCredit,
  editCredit,
  cancelEditCredit,
} from '../../thunks';

type CreditsViewProps = {
  credits: Credits,
  editedCreditId: string,
  edit: Function,
  save: Function,
  cancel: Function,
};

class CreditsView extends PureComponent<CreditsViewProps> {
  onEdit = (id: string) => {
    const { edit }: CreditsViewProps = this.props;
    edit(id);
  };

  onSave = (credit: Credit) => {
    const { save }: CreditsViewProps = this.props;
    save({
      id: credit.id,
      data: credit,
    });
  };

  onStopEditing = () => {
    const { cancel }: CreditsViewProps = this.props;
    cancel();
  };

  render() {
    const { credits: { order, items }, editedCreditId } : CreditsViewProps = this.props;
    return order.map((id: string) => {
      const credit: Credit = items[id];
      if (id === editedCreditId) {
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
  editedCreditId: state.appStatus.status === 'EDIT_CREDIT'
    ? get(state.appStatus, 'data.id', null)
    : null,
});
const mapsDispatchToProps = {
  save: saveCredit,
  edit: editCredit,
  cancel: cancelEditCredit,
};

export default connect(mapsStateToProps, mapsDispatchToProps)(CreditsView);
