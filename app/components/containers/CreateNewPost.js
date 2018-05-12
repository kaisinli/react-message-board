import React from 'react';
import async from 'async';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { createNewMessage } from '../../reducers/singleMessageReducer';
import { postNewMessage } from '../../reducers/allMessagesReducer'

class CreateNewPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            message: props.message,
            user: props.user,
            time: props.time,
            id: props.id
        }

        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(event) {
        event.preventDefault();
        let target = event.target;
        let allMessages = this.props.messages;
        let title = target.title.value,
            message = target.message.value,
            user = target.user.value,
            time = `${(new Date).getHours()}:${(new Date).getMinutes()}`,
            id = allMessages ? allMessages.length + 1 : 1;

        let newMsg = new Promise((resolve, reject)=>{
            console.log('hihihihi', this)
            resolve(this.props.createNewMessage(title, message, user, time, id))
        })
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
        messages: state.messages.messages,
        title: state.singleMessage.title,
        message: state.singleMessage.message,
        user: state.singleMessage.user,
        time: state.singleMessage.time,
        singleMessage: state.singleMessage
    }
}

const mapDispatchToProps = {
    createNewMessage,
    postNewMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPost)