import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const SingleMessageBox = (props) => {
  const msg = props.msg;

  let hour = msg.timestamp.getHours(),
    parsedHour = hour > 12 ? `${hour - 12}` : hour === 0 ? '12' : `${hour}`;

  let minute = msg.timestamp.getMinutes();
  minute = hour > 12 ? `${minute}pm` : `${minute}am`;

  return (
    <div className="single-message-container">
      <p id="post-msg"><span>{msg.message}</span></p>
      <div className="container" id="post-data">
        <div className="row">
          <div className="col" id="post-user">
            <p >Posted by: {msg.user}</p>
          </div>
          <div className="col" id="post-comments-num">
            <p>{`${msg.comments.length}`} comments</p>
          </div>
          <div className="col" id="post-time">
            <p>
              Last Update: {msg.timestamp.getUTCMonth() + 1}/{msg.timestamp.getUTCDate()}/{JSON.stringify(msg.timestamp.getFullYear()).slice(2)} @ {parsedHour}:{minute}
            </p>
          </div>
        </div>
        <Link to={`/posts/${msg.id}`}>View Post</Link>
      </div>
    </div>
  )
}

export default SingleMessageBox
