import React from 'react';
import './SingleInterview.css';
import {Card, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { unbookInterview } from '../store/actions'

class BookedInterview extends React.Component {
  constructor(props) {
    super(props);
    this.unbook = this.unbook.bind(this);
  }

  unbook(e) {
    e.preventDefault();
    
    const user = this.props.user;
    if (user) {
        const interview = this.props.interview_;
        interview.studentId = null;
        interview.isBooked = false;
        this.props.unbook(interview.id,interview);
      } else {
      console.error("Not signed in");
    }
  }

  render() {
  return (
    <div className="SingleInterview">
      <Card style={{ width: '18rem', borderRadius: '20px'}}>
        <Card.Body>
          <Card.Text>
          {this.props.interview_.interviewDate}
            <br></br>
            {this.props.interview_.interviewTime}
            <br></br>
            {this.props.interview_.interviewLocation}
            <br></br>
            {this.props.interview_.extraInfo}
          </Card.Text>
          {/* This button will BOOK the meeting */}
          {this.props.user.isInterviewer && 
            <Button variant="primary" as={Link} to={"/interviews/" + this.props.interview_.id + "/editInterview"}>
              Edit
            </Button>
          }
          <Button variant="primary" style={{marginLeft: '5px'}} onClick={this.unbook}>unbook</Button>
          <Button variant="danger" style={{marginLeft: '5px'}}>Remove</Button>
        </Card.Body>
      </Card>
    </div>
  );
  }
}

const getStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    unbook: (interviewId, body) => dispatch(unbookInterview(interviewId,body))
  }
}
export default connect(getStateToProps, mapDispatch)(BookedInterview);

