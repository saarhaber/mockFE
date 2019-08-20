import React from 'react';
import {Card, Form, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import './EditInterview.css';
import {editInterview} from '../store/actions/'

class EditInterview extends React.Component {

  render() {

    return (
      <div className="editInterview">
        <Card className="edit-card" style={{margin: "10vh 20vh"}}>
          <Card.Header>Update Interview Info</Card.Header>
          <Card.Body>
                <Form onSubmit={this.profileSubmit.bind(this)}>
                    <Form.Group>
                      <Form.Label>Date</Form.Label>
                      <Form.Control name="date" type="date" value={this.state.InterviewDate} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group >
                      <Form.Label>Time</Form.Label>
                      <Form.Control name="time" type="time" value={this.state.InterviewTime} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Location</Form.Label>
                      <Form.Control name="location" type="loction" value={this.state.InterviewLocation} onChange={this.handleChange}/>
                    </Form.Group>
                  <Button variant="primary" type="submit" className="edit-form-btn">
                    Submit
                  </Button>
                </Form>
            </Card.Body>
         </Card>
      </div>
    );
  }
}

const getStateToProps = (state) => {
  return {
    interview: state.interview
  }
}
export default connect(getStateToProps, {editInterview})(EditInterview);