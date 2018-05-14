import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const SingleMessageBox = (props) => {
  const msg = props.msg;

  let hour = msg.timestamp.getHours();
  hour = hour > 12 ? `${hour - 12}` : hour === 0 ? '12' : `${hour}`;

  let minute = msg.timestamp.getMinutes();
  minute = hour > 12 ? `${minute}pm` : `${minute}am`;

  return (
    <div id="single-post-container">
      <div>
        <p id="post-msg"><span>{msg.message}</span></p>
        <div id="post-user">
          <p >Posted by: {msg.user}</p>
        </div>
        <div id="post-time">
          <p>
            Last Update:
            {msg.timestamp.getUTCMonth() + 1}/
            {msg.timestamp.getUTCDate()}/
            {JSON.stringify(msg.timestamp.getFullYear()).slice(2)} @ {hour}:{minute}
          </p>
        </div>
      </div>
      <Link to={`/posts/${msg.id}`}>View Post</Link>
    </div>
  )
}

export default SingleMessageBox
