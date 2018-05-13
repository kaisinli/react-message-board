import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import SingleCommentBox from '../presentational/SingleCommentBox';
import { postNewComment } from '../../reducers/allMessagesReducer';

class SinglePost extends React.Component {
    constructor(props) {
        super(props)
        this.submitHandler = this.submitHandler.bind(this);
    }
    
    submitHandler(event) {
        event.preventDefault();

        console.log('PROPS', this.props)

        let target = event.target;
        let comment = target.comment.value,
            user = target.user.value,
            id = this.props.params.id,
            cmtLength = this.props.messages[id-1].comments.length,
            cmtId = cmtLength ? (cmtLength + 1) : 1;

        this.props.postNewComment({ id, user, comment, cmtId });
    }

    render() {
        const post = this.props.messages[this.props.params.id - 1]

        let hour = post.timestamp.getHours();
        let parsedHour = hour > 12 ? `${hour - 12}` : hour === 0 ? '12' : `${hour}`;

        let minute = post.timestamp.getMinutes();
        minute = hour > 12 ? `${minute}pm` : `${minute}am`;


        return (
            <div>
                <Link to='/'><button className="btn btn-secondary">Back to Posts</button></Link>
                <h3>{post.title}</h3>
                <p>By: {post.user} on {parsedHour}:{minute}</p>
                <p>{post.message}</p>
                <h4>Responses</h4>
                {post.comments.length > 0 && post.comments.map(cmt => <SingleCommentBox cmt={cmt} key={cmt.id} />)}
                <div>
                    <form onSubmit = {this.submitHandler} id="new-comment-form">
                        <label className="required">Message:</label>
                        <textarea
                            className="form-control"
                            name="comment"
                            type="text"
                            required />
                        <label className="required">User:</label>
                        <input
                            className="form-control"
                            name="user"
                            type="text"
                            required />
                        <button className="btn btn-success" type="submit">Post Reply</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages.messages
    }
}

const mapDispatchersToProps = {
    postNewComment
}

export default connect(mapStateToProps, mapDispatchersToProps)(SinglePost)
