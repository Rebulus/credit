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
  removeCredit,
} from '../../thunks';

type CreditsViewProps = {
  credits: Credits,
  editedCreditId: string,
  edit: Function,
  save: Function,
  cancel: Function,
  remove: Function,
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

  onRemove = (id: string) => {
    const { remove }: CreditsViewProps = this.props;
    remove(id);
  }

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
          onRemove={this.onRemove}
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
  remove: removeCredit,
};

export default connect(mapsStateToProps, mapsDispatchToProps)(CreditsView);
