import React, { Component } from 'react';
import NoPostPage from './NoPostPage';
import SingleMessageBox from './SingleMessageBox';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Main = (props) => {
    const messages = props.messages;
    return (
        <div id="main-container">
            <h1 id="main-title">Fairygodboss Message Board</h1>
            {!messages.length && <NoPostPage />}
            {messages.length > 0 && messages.map(msg => <SingleMessageBox msg = {msg} key = {msg.id}/>)}
            <Link to='/newpost'><button className="btn btn-info">Create New Post</button></Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        messages: state.messages.messages
    }
}

export default connect(mapStateToProps, null)(Main)
