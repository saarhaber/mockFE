import React from 'react';
import './SingleInterview.css';
import {Card, Button} from 'react-bootstrap';
import {connect} from 'react-redux';

class BookedInterview extends React.Component {
  render() {
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
          <Button variant="primary" style={{ margin: '5px'}}>Remove</Button>
          {this.props.user.isInterviewer ? <Button variant="primary">Edit</Button> : null}
        </Card.Body>
      </Card>
    </div>
  );
  }
}

const getStateToProps = (state) => {
  console.log({
    user: state.user,
  })
  return {
    user: state.user,
  }
}
export default connect(getStateToProps)(BookedInterview);

