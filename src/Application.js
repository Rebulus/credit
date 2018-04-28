// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  Root,
  Grid,
  Col,
  Spinner,
  Container,
  Header,
  Title,
  Body,
  Content,
  Footer,
} from 'native-base';
import Roboto from 'native-base/Fonts/Roboto.ttf';
import Roboto_medium from 'native-base/Fonts/Roboto_medium.ttf';
import { Font } from 'expo';
import store from './store';
import {
  CreditsView,
  AddCredit,
} from './credits/containers';
import {
  PaymentsList,
} from './payments/containers';

type Props = {};
export default class Application extends Component<Props> {
  store = store;

  state = {
    loading: true,
  };

  async componentWillMount() {
    await Font.loadAsync({
      Roboto,
      Roboto_medium,
    });
    this.setState({ loading: false });
  }

  renderSpinner() {
    return (
      <Root>
        <Grid>
          <Col style={{ justifyContent: 'center' }}>
            <Spinner />
          </Col>
        </Grid>
      </Root>
    );
  }

  renderContent() {
    return (
      <Root>
        <Provider store={this.store}>
          <Container>
            <Header>
              <Body>
                <Title>Header</Title>
              </Body>
            </Header>
            <Content>
              <CreditsView />
              <PaymentsList />
            </Content>
            <Footer>
              <AddCredit />
            </Footer>
          </Container>
        </Provider>
      </Root>
    );
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return this.renderSpinner();
    }
    return this.renderContent();
  }
}
