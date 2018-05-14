import React from 'react';
import { connect } from 'react-redux';

const SingleCommentBox = (props) => {
    const cmt = props.cmt;

    return (
        <div>
            <div className = "single-comment-container">
                <b><span>{cmt.user}</span></b>
                <p><span>{cmt.comment}</span></p>
            </div>
        </div>
    )
}

export default SingleCommentBox