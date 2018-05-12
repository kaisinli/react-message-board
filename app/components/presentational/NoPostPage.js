import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const NoPostPage = () => {
  return (
    <div id="main-container">
      <h3>There are currently no posts...add one!</h3>
      <Link to='/newpost'><button className="btn btn-info">Create New Post</button></Link>
    </div>
  )
}

export default NoPostPage