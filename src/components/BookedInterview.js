import React from 'react';
import './SingleInterview.css';
import {Card, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import { unbookInterview, selectInterview} from '../store/actions';

class BookedInterview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToEdit: false
    }
    this.unbook = this.unbook.bind(this);
    this.editInterview = this.editInterview.bind(this);
  }

  unbook(e) {
    e.preventDefault();
    
    const user = this.props.user;
    if(user) {
      if (user.isInterviewer) {
        return console.error("Interviewers cannot unbook interviews!");
      } else {
        const interview = this.props.interview_;
        interview.studentId = null;
        interview.isBooked = false;
        this.props.unbook(interview.id,interview);
      }
    } else {
      console.error("Not signed in");
    }
  }

  editInterview() {
    this.props.selectInterview(this.props.interview_);
    this.setState({redirectToEdit: true});
  }
  render() {
    if (this.state.redirectToEdit) {
      return(
        <Redirect to="editInterview"/>
      );
    }
    console.log("Inrender", this.props);
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
              <Button variant="primary" onClick={this.editInterview}>
                Edit
              </Button>
            }
            <Button variant="primary" style={{marginLeft: '5px'}} onClick={this.unbook}>Unbook</Button>
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

export default connect(getStateToProps, {selectInterview, unbookInterview})(BookedInterview);

