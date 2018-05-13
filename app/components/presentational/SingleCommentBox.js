import React from 'react';
import { connect } from 'react-redux';

const SingleCommentBox = (props) => {
    const cmt = props.cmt;

    return (
        <div>
            <div>
                <p><span>{cmt.user}</span></p>
                <p><span>{cmt.comment}</span></p>
            </div>
        </div>
    )
}

export default SingleCommentBox