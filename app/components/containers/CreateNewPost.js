import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class CreateNewPost extends React.Component {
    render() {
        return (
            <div>
                <h3>Basic Info</h3>
                <form id="basicInfoForm">
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

// const mapStateToProps = state => {
//     return {
//         firstName: state.info.firstName,
//         lastName: state.info.lastName,
//         email: state.info.email,
//         phone: state.info.phone,
//         website: state.info.website
//     }
// }

// const mapDispatchToProps = {
//     updateInfo,
//     locationPage
// }

export default CreateNewPost