import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getChatLog from './service';

import MessageList from './components/MessageList';

import './App.css';

class App extends Component {
  componentDidMount() {
      this.props.getChatLog();
  }
  render() {
    return (
      <div>
          <h1>Hello!</h1>
          <h2>Messages</h2>
          <MessageList messages={this.props.messages} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      messages : state.messages
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
