// @flow
import React, { PureComponent } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Credit } from '../models';

type CreditEditorProps = {
  credit: Credit,
  onSave: Function,
  onStopEditing: Function,
}

type CreditEditorState = {
  credit: Credit,
}

const styles = StyleSheet.create({
  creditView: {
    marginBottom: 10,
  },
});

class CreditEditor extends PureComponent<CreditEditorProps, CreditEditorState> {
  state: CreditEditorState = {
    credit: this.props.credit,
  };

  componentWillReceiveProps({ credit }: CreditEditorProps) {
    if (credit !== this.state.credit) {
      const newCredit: Credit = new Credit(credit);
      this.setState({
        credit: newCredit,
      });
    }
  }

  onNameChange = (name: string) => {
    const { credit }: CreditEditorState = this.state;
    const newCredit: Credit = credit.update({ name });
    this.setState({
      credit: newCredit,
    });
  };

  onMonthsChange = (months: string) => {
    const { credit }: CreditEditorState = this.state;
    const newCredit: Credit = credit.update({ months: Number(months) });
    this.setState({
      credit: newCredit,
    });
  };

  onPercentChange = (percent: string) => {
    const { credit }: CreditEditorState = this.state;
    const newCredit: Credit = credit.update({ percent: Number(percent) });
    this.setState({
      credit: newCredit,
    });
  };

  onValueChange = (value: string) => {
    const { credit }: CreditEditorState = this.state;
    const newCredit: Credit = credit.update({ value: Number(value) });
    this.setState({
      credit: newCredit,
    });
  };

  onSaveCredit = () => {
    const { credit }: CreditEditorState = this.state;
    const { onSave }: CreditEditorProps = this.props;
    onSave(credit);
  };

  onStopEditing = () => {
    const { credit }: CreditEditorState = this.state;
    const { onStopEditing }: CreditEditorProps = this.props;
    onStopEditing(credit.id);
  };

  render() {
    const { credit }: CreditEditorState = this.state;
    const { credit: originalCredit }: CreditEditorProps = this.props;
    // TODO - add percent view
    return (
      <View style={styles.creditView}>
        <TextInput
          placeholder="Name"
          onChangeText={this.onNameChange}
          value={credit.name}
        />
        <TextInput
          placeholder="Months"
          onChangeText={this.onMonthsChange}
          value={String(credit.months)}
        />
        <TextInput
          placeholder="Percent"
          onChangeText={this.onPercentChange}
          value={String(credit.percent)}
        />
        <TextInput
          placeholder="Value"
          onChangeText={this.onValueChange}
          value={String(credit.value)}
        />
        <Button
          disabled={credit === originalCredit}
          onPress={this.onSaveCredit}
          title="Save"
        />
        <Button
          onPress={this.onStopEditing}
          title="Close"
        />
      </View>
    );
  }
}

export default CreditEditor;
