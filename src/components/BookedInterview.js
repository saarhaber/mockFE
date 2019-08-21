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
  console.log(this.props.interview_)
  return (
    <div className="SingleInterview">
      <Card style={{ width: '18rem', borderRadius: '20px'}}>
        <Card.Body>
          <Card.Text>
            Time: time here;
            <br></br>
            Location: location here
            <br></br>
            Interviewer: name here
          </Card.Text>
          {/* This button will BOOK the meeting */}
          {this.props.user.isInterviewer && 
            <Button variant="primary" as={Link} to={"/interviews/" + this.props.interview_.id + "/editInterview"}>
              Edit
            </Button>
          }
          <Button variant="primary" style={{marginLeft: '5px'}}>Unbook</Button>
          {this.props.user.isInterviewer && 
            <Button variant="danger" style={{marginLeft: '5px'}}>Remove</Button>
          }        </Card.Body>
      </Card>
    </div>
  );
  }
}

const getStateToProps = (state) => {
  console.log({
    user: state.user
    })
  return {
    user: state.user
  }
}
export default connect(getStateToProps)(BookedInterview);

