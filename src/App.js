import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as services from './service';

import MessageList from './components/MessageList';

import './App.css';
import './index.css';

class App extends Component {
  componentDidMount() {
      this.props.getChatLog();
      this.props.getMembersList();
  }
  sortMessagesByTime() {
      const messages = this.props.messages;

      if (messages && messages.length > 0) {
          const sortedMessages = messages.slice();

          sortedMessages.sort( (a, b) => new Date(a.timestamp) - new Date(b.timestamp) );

          return sortedMessages;
      }
      return messages;
  }
  render() {
    return (
      <div>
          <h1>Hello!</h1>
          <h2>Messages</h2>
          <MessageList messages={this.sortMessagesByTime()} members={this.props.members} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      messages : state.messages,
      members: state.members
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(services, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
