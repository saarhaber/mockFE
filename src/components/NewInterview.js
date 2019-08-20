import React from 'react';
import './NewInterview.css';
import {Form, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addInterview} from '../store/actions/'

class NewInterview extends React.Component {
    constructor() {
        super();
      }
    
      handleSubmit(e) {
          e.preventDefault();
        this.props.addInterview(interview);
        const interview = {
            interviewTime: e.target.time.value,
            interviewerId: e.target.user.id,
            interviewDate: e.target.date.value
          }
          this.props.addInterview(interview);
      }
    

  render() {
  return (
    <div className="NewInterview">
      <Form onSubmit={this.handleSubmit.bind.this}>
      <Form.Group >
    <Form.Label>Date</Form.Label>
    <Form.Control type="date" placeholder="11:00 AM - 12:30 PM" />
  </Form.Group>
  <Form.Group >
    <Form.Label>Time</Form.Label>
    <Form.Control type="time" placeholder="11:00 AM - 12:30 PM" />
  </Form.Group>
  <Form.Group >
    <Form.Label>Location</Form.Label>
    <Form.Control type="string" placeholder="Google, 111 8th Avenue, NYC" />
  </Form.Group>
  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>
    </div>
  );
  }
}

const getStateToProps = (state) => {
    console.log({
      user: state.user,
      interviews: state.interviews
    })
    return {
      user: state.user,
      interviews: state.interviews
    }
  }
  export default connect(getStateToProps, {addInterview})(NewInterview);
