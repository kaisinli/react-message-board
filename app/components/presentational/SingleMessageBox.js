import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const SingleMessageBox = (props) => {
  const messages = props.messages;
  return (
    <div id="main-container">
      {
        messages.map(eachMessage => (
          <div>
            <p><span>{eachMessage.message}</span></p>
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    messages: state.messages.messages
  }
}

export default connect(mapStateToProps, null)(SingleMessageBox)
