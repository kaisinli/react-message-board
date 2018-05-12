import React from 'react';
import { connect } from 'react-redux';
import { putSchool, deleteAllSchools } from '../../reducers/infoReducer';
import { locationPage, summaryPage } from '../../reducers/currentPageReducer';

class Education extends React.Component {
    constructor(props) {
        super(props)
        this.state = props.school;
        this.submitHandler = this.submitHandler.bind(this);
        this.onBackClickHandler = this.onBackClickHandler.bind(this);
    }

    componentWillMount() {
        this.props.deleteAllSchools()
    }

    submitHandler(event) {
        event.preventDefault()
        let target = event.target;
        this.props.putSchool(target.school1.value);
        target.school2.value && this.props.putSchool(target.school2.value);
        this.props.summaryPage()
    }

    onBackClickHandler() {
        this.props.locationPage()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Education</h3>
                <form onSubmit={this.submitHandler}>
                    <label className="required">School 1:</label>
                    <input
                        name="school1"
                        className="form-control"
                        type="text"
                        required
                        value={this.props.school[0]} />
                    <label>School 2:</label>
                    <input
                        name="school2"
                        className="form-control"
                        type="text"
                        value={this.props.school[1] && this.props.school[1]} />
                    <button className="btn btn-success" type="submit" >Next</button>
                    <br />
                    <button onClick={this.onBackClickHandler} className="btn btn-secondary">Back</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        school: state.info.school
    }
}

const mapPropsToProps = {
    putSchool,
    deleteAllSchools,
    locationPage,
    summaryPage
}

export default connect(mapStateToProps, mapPropsToProps)(Education)