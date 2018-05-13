import React from 'react';
import { connect } from 'react-redux';

const SingleMessageBox = (props) => {
  const msg = props.msg;
  return (
    <div>
      <p><span>{msg.message}</span></p>
      <p><span>{msg.user} {msg.time}</span></p>
    </div>
  )
}

export default SingleMessageBox
