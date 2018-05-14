import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const NoPostPage = () => {
  return (
    <div>
      <p id = "no-posts-note">There are currently no posts...add one!</p>
    </div>
  )
}

export default NoPostPage