import React from 'react';
import { connect } from 'react-redux';

const SingleMessageBox = (props) => {
  const msg = props.msg;
  let hour = msg.timestamp.getHours();
  hour = hour > 12 ? `${hour - 12}` : hour === 0 ? '12' : `${hour}`
  let minute = msg.timestamp.getMinutes();
  minute = hour > 12 ? `${minute}pm` : `${minute}am` 
  return (
    <div>
      <p><span>{msg.message}</span></p>
      <p>Posted by: {msg.user} Last Update:
      {msg.timestamp.getUTCMonth() + 1}/
      {msg.timestamp.getUTCDate()}/
      {JSON.stringify(msg.timestamp.getFullYear()).slice(2)}
        @{hour}:{minute}</p>
    </div>
  )
}

export default SingleMessageBox
