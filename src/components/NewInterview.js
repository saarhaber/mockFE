import React from 'react';
import './NewInterview.css';
import {Form, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addInterview, getUser} from '../store/actions/';
import {Redirect} from 'react-router';
import NavMain from './NavMain';

const TAG = "NEWINTERVIEW_JS";
class NewInterview extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      redirect: false
    }
  }

  componentDidMount() {
    this.props.getUser();
  }
  
  handleSubmit(e) {
    e.preventDefault();
    console.log(TAG, "Submitted");
    const interview = {
      interviewTime: e.target.time.value,
      interviewerId: this.props.user.id,
      interviewDate: e.target.date.value,
      interviewLocation: e.target.location.value,
    }
    this.props.addInterview(interview);
    this.setState({redirect: true});
    window.location.reload()
  }
  

  render() {
    if (!this.props.user.id) {
      return (
        <Redirect to="/login"/>
      );
    } else if((!this.props.user.isInterviewer) || this.state.redirect) {
      return (
        <Redirect to="/user"/>
      );
    }
    return (
      <div className="NewInterview">
        <NavMain/>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group >
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" name="date" placeholder="11:00 AM - 12:30 PM" />
          </Form.Group>
          <Form.Group >
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" name="time" placeholder="11:00 AM - 12:30 PM" />
          </Form.Group>
          <Form.Group >
            <Form.Label>Location</Form.Label>
            <Form.Control type="string" name="location" placeholder="Google, 111 8th Avenue, NYC" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const getStateToProps = (state) => {
    return {
      user: state.user,
      serverResponse: state.serverResponse
    }
  }

export default connect(getStateToProps, {addInterview, getUser})(NewInterview);
