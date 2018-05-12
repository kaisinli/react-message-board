import React from 'react';
import { connect } from 'react-redux';
import { updateInfo } from '../../reducers/infoReducer';
import { locationPage } from '../../reducers/currentPageReducer';

class BasicInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
            email: props.email,
            phone: props.phone,
            website: props.website
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this)
    }

    submitHandler(event) {
        event.preventDefault()
        let elements = document.getElementById('basicInfoForm').elements;

        // there are 4 fields 
        for (let i = 0; i <= 4; i++) {
            this.props.updateInfo(elements[i].name, elements[i].value)
        }

        this.props.locationPage()
    }

    changeHandler(event) {
        const inputValue = event.target.value;
        this.setState({ [event.target.name]: inputValue });
    }

    render() {
        return (
            <div>
                <h3>Basic Info</h3>
                <form onSubmit={this.submitHandler} id="basicInfoForm">
                    <label className="required">First Name:</label>
                    <input
                        className="form-control"
                        name="firstName"
                        type="text"
                        required
                        value={this.state.firstName}
                        onChange={this.changeHandler} />
                    <label className="required">Last Name:</label>
                    <input
                        className="form-control"
                        name="lastName"
                        type="text"
                        required
                        value={this.state.lastName}
                        onChange={this.changeHandler} />
                    <label className="required">Phone:</label>
                    <input
                        className="form-control"
                        name="phone"
                        type="number"
                        required
                        value={this.state.phone}
                        onChange={this.changeHandler} />
                    <label className="required">Email:</label>
                    <input
                        className="form-control"
                        name="email"
                        type="email"
                        required
                        value={this.state.email}
                        onChange={this.changeHandler} />
                    Website:
                    <input
                        className="form-control"
                        name="website"
                        type="text"
                        value={this.state.website}
                        onChange={this.changeHandler} />
                    <button className="btn btn-success" type="submit">Next</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        firstName: state.info.firstName,
        lastName: state.info.lastName,
        email: state.info.email,
        phone: state.info.phone,
        website: state.info.website
    }
}

const mapDispatchToProps = {
    updateInfo,
    locationPage
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfo)