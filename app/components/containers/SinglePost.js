import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import SingleCommentBox from '../presentational/SingleCommentBox';
import { postNewComment } from '../../reducers/allMessagesReducer';

class SinglePost extends React.Component {
    constructor(props) {
        super(props)
        const id = props.params.id;
        const post = props.messages[id-1]

        this.state = {
            id,
            title: post.title,
            message: post.message,
            timestamp: post.timestamp,
            user: post.user,
            comments: post.comments
        };

        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(event) {
        event.preventDefault();

        let target = event.target;
        let comment = target.comment.value,
            user = target.user.value,
            id = this.state.id,
            cmtId = this.state.comments.length ? (this.state.comments.length + 1) : 1;
            console.log('COMMENT LENGTH', cmtId)

        this.props.postNewComment({ id, user, comment, cmtId });
        
        this.setState(
            (prevState, props) => {
                return { comments: prevState.comments.concat({ id: cmtId, user, comment }) }
            }
        )
    }

    render() {
        const post = this.state;
        let hour = post.timestamp.getHours();
        hour = hour > 12 ? `${hour - 12}` : hour === 0 ? '12' : `${hour}`;

        let minute = post.timestamp.getMinutes();
        minute = hour > 12 ? `${minute}pm` : `${minute}am`;

        return (
            <div>
                <Link to='/'><button className="btn btn-secondary">Back to Posts</button></Link>
                <h3>{post.title}</h3>
                <p>By: {post.user} on {hour}:{minute}</p>
                <p>{post.message}</p>
                <h4>Responses</h4>
                {post.comments.length > 0 && post.comments.map(cmt => <SingleCommentBox cmt={cmt} key={cmt.id} />)}
                <div>
                    <form id="new-comment-form" onSubmit={this.submitHandler}>
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
