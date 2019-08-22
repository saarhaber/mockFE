import React from 'react';
import {Card, Form, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import './EditInterview.css';
import {editInterview} from '../store/actions/'
import NavMain from './NavMain';
import {Redirect} from 'react-router';

class EditInterview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interviewDate: undefined,
      interviewTime: undefined,
      interviewLocation: undefined,
      extraInfo: undefined,
      redirect: false
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({
      interviewDate: this.props.interview.interviewDate,
      interviewTime: this.props.interview.interviewTime,
      interviewLocation: this.props.interview.interviewLocation,
      extraInfo: this.props.interview.extraInfo
    })
  }

  handleChange(e){
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmitHandler = event => {
    event.preventDefault()
    this.props.editInterview(this.props.interview.id, {
      interviewDate: this.state.interviewDate,
      interviewTime: this.state.interviewTime,
      interviewLocation: this.state.interviewLocation,
      extraInfo: this.state.extraInfo
    })
    this.setState({
      redirect: true
    })
  }

  render() {
    console.log(this.props.interview);
    if (!this.props.user.id) {
      return (
        <Redirect to="/login"/>
      );
    } 
    else if(!this.props.user.isInterviewer) {
      return (
        <Redirect to="/user"/>
      );
    }
    if (this.state.redirect) {
      return (
        <Redirect to="/user" />
      );
    }
    else {
      return (
        <div className="editInterview">
          <NavMain/>
          <div className="login" style={{width: "1000px"}}>
            <Card className="edit-card" style={{margin: "10vh 20vh"}}>
              <Card.Header>Update Interview Info</Card.Header>
              <Card.Body>
                <Form onSubmit={this.onSubmitHandler}>
                  <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control name="interviewDate" type="date" value={this.state.interviewDate} onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group >
                    <Form.Label>Time</Form.Label>
                    <Form.Control name="interviewTime" type="time" value={this.state.interviewTime} onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Location</Form.Label>
                    <Form.Control name="interviewLocation" type="loction" value={this.state.interviewLocation} onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="extraInfo" type="loction" value={this.state.extraInfo} onChange={this.handleChange}/>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="edit-form-btn">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      );
    }
  }
}

const getStateToProps = (state) => {
  return {
    interview: state.interview,
    user: state.user
  }
}
export default connect(getStateToProps, {editInterview})(EditInterview);