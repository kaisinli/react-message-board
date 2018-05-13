import React from 'react';
import async from 'async';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { postNewMessage } from '../../reducers/allMessagesReducer';
import { browserHistory } from 'react-router';

class CreateNewPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            message: props.message,
            user: props.user,
            time: props.time,
            id: props.id,
            comments: []
        }
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(event) {
        console.log('HISTORY', browserHistory)
        event.preventDefault();
        let target = event.target;
        let allMessages = this.props.messages;
        let title = target.title.value,
            message = target.message.value,
            user = target.user.value,
            time = `${(new Date).getHours()}:${(new Date).getMinutes()}`,
            id = allMessages ? allMessages.length + 1 : 1,
            comments = [];

        this.props.postNewMessage({ title, message, user, time, id, comments });
        browserHistory.replace({ pathname: '/' })
    }

    render() {
        return (
            <div>
                <h3>Create a new post</h3>
                <form onSubmit={this.submitHandler} id="new-post-form">
                    <label className="required">Title:</label>
                    <input
                        className="form-control"
                        name="title"
                        type="text"
                        required />
                    <label className="required">Message:</label>
                    <input
                        className="form-control"
                        name="message"
                        type="text"
                        required />
                    <label className="required">User:</label>
                    <input
                        className="form-control"
                        name="user"
                        type="text"
                        required />
                    <Link to='/'><button className="btn btn-secondary">Cancel</button></Link>
                    <button className="btn btn-success" type="submit">Create Post</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages.messages
    }
}

const mapDispatchToProps = {
    postNewMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPost)