import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const SinglePostBox = (props) => {
    let message, user
    return (
        <div id="main-container">
            <p>{message}</p>
            <Link to='/newpost'><button className="btn btn-info">Create New Post</button></Link>
        </div>
    )
}

export default SinglePostBox