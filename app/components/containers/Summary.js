import React from 'react';
import { connect } from 'react-redux';
import { basicPage, locationPage, educationPage, thankYouPage } from '../../reducers/currentPageReducer';

import axios from 'axios'

class Summary extends React.Component {
    constructor(props) {
        super(props)
        this.basicClickHandler = this.basicClickHandler.bind(this);
        this.locationClickHandler = this.locationClickHandler.bind(this)
        this.educationClickHandler = this.educationClickHandler.bind(this)
        this.submitToDB = this.submitToDB.bind(this)
    }

    basicClickHandler() {
        this.props.basicPage()
    }

    locationClickHandler() {
        this.props.locationPage()
    }

    educationClickHandler() {
        this.props.educationPage()
    }

    submitToDB() {
        let info = this.props.info;
        let basicInfoSubmit = {
            firstName: info.firstName,
            lastName: info.lastName,
            email: info.email,
            phone: info.phone,
            website: info.website
        }

        let locationInfoSubmit = {
            city: info.city,
            state: info.state,
            country: info.country
        }

        let educationInfoSubmit = info.school;

        axios.post('api/locations', locationInfoSubmit)
            .then((location) => {
                let locationId = location.data[0].id;
                axios.post('api/users', { basicInfoSubmit, locationId })
                    .then(() =>
                        educationInfoSubmit.forEach(school => {
                            axios.post('api/educations', { school })
                        }))
                    .then(() => {
                        console.log('Submission successful');
                        this.props.thankYouPage()
                    })
            })
            .catch (error => console.log('ERROR', error))
    }

    render() {
        let info = this.props.info;

        return (
            <div>
                <h4>Please confirm the info below:</h4>
                <div>
                    <h6>Basic Info <button onClick={this.basicClickHandler} className="summary-button">edit</button></h6>
                    <ul>
                        <li><b>First Name:</b> {info.firstName}</li>
                        <li><b>Last Name:</b> {info.lastName}</li>
                        <li><b>Email:</b> {info.email}</li>
                        <li><b>Phone:</b> {info.phone}</li>
                        <li><b>Website:</b> {info.website}</li>
                    </ul>
                </div>
                <div>
                    <h6>Location <button onClick={this.locationClickHandler} className="summary-button">edit</button></h6>
                    <ul>
                        <li><b>City:</b> {info.city}</li>
                        <li><b>State:</b> {info.state}</li>
                        <li><b>Country</b> {info.country}</li>
                    </ul>
                </div>
                <div>
                    <h6>Education <button onClick={this.educationClickHandler} className="summary-button">edit</button></h6>
                    <ul>
                        <li><b>School 1:</b> {info.school[0]}</li>
                        {info.school[1] && <li><b>School 2:</b> {info.school[1]}</li>}
                    </ul>
                </div>
                <br />
                <button className="btn btn-success" onClick={this.submitToDB}>Submit</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        info: state.info
    }
}

const mapDispatchToProps = {
    basicPage,
    locationPage,
    educationPage,
    thankYouPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary)
