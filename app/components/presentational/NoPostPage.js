import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const NoPostPage = () => {
  return (
    <div id="main-container">
      <h3>There are currently no posts...add one!</h3>
    </div>
  )
}

export default NoPostPage