import React, { Component } from 'react';
import NoPostPage from './NoPostPage'
import { connect } from 'react-redux';

const Main = (props) => {
  return (
    <div id="main-container">
      <h1 id="main-title">Fairygodboss Message Board</h1>
      {!props.messages.length && <NoPostPage />}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    messages: state.messages.messages
  }
}

export default connect(mapStateToProps, null)(Main)
