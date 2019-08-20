import React from 'react';
import {Card, Form, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import './EditInterview.css';
import {editInterview} from '../store/actions/'

class EditInterview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interviewDate: this.props.interview_.interviewDate,
      interviewTime: this.props.interview_.interviewTime,
      interviewLocation: this.props.interview_.interviewLocation,
      extraInfo: this.props.interview_.extraInfo
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({
      interviewDate: this.props.interviewDate,
      interviewTime: this.props.interviewTime,
      interviewLocation: this.props.interviewLocation,
      extraInfo: this.props.extraInfo
    })
  }

  handleChange(e){
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    console.log(this.props.interview_)
    return (
      <div className="editInterview">
        <Card className="edit-card" style={{margin: "10vh 20vh"}}>
          <Card.Header>Update Interview Info</Card.Header>
          <Card.Body>
                <Form onSubmit={() => console.log("HELLO")}>
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
    );
  }
}

const getStateToProps = (state) => {
  return {
    interview: state.interview
  }
}
export default connect(getStateToProps, {editInterview})(EditInterview);