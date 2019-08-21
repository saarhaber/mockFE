import React from 'react';
import './SingleInterview.css';
import {Card, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class BookedInterview extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log("BOOKEDDD" + this.props.interview_)
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
          </Card.Text>
          {/* This button will BOOK the meeting */}
          {this.props.user.isInterviewer && 
            <Button variant="primary" as={Link} to={"/interviews/" + this.props.interview_.id + "/editInterview"}>
              Edit
            </Button>
          }
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
export default connect(getStateToProps)(BookedInterview);

