import React from 'react';
import './SingleInterview.css';
import {Card, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import {unbookInterview, selectInterview, deleteInterview} from '../store/actions';

class BookedInterview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToEdit: false,
      redirectToLogin: false
    }
    this.unbook = this.unbook.bind(this);
    this.editInterview = this.editInterview.bind(this);
    this.removeInterview = this.removeInterview.bind(this)
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
    this.setState({
      redirectToLogin: true
    })
  }

  removeInterview = event => {
    event.preventDefault()
    this.props.deleteInterview(this.props.interview_)
    this.setState({
      redirectToLogin: true
    })
  }

  editInterview() {
    this.props.selectInterview(this.props.interview_);
    this.setState({redirectToEdit: true});
  }

  render() {
    let student;
    for (let i = 0; i < this.props.users.length; i++) {
      if (this.props.users[i].id == this.props.interview_.studentId) {
        student = this.props.users[i]
        break
      }
    }

    if (this.state.redirectToEdit) {
      return(
        <Redirect to="editInterview"/>
      );
    }
    else if (this.state.redirectToLogin) {
      return(
        <Redirect to="/login"/>
      );
    }
    return (
      <div className="SingleInterview">
        <Card style={{ width: '12rem', borderRadius: '20px'}}>
          <Card.Body style={{textAlign: "center"}}>
            {
              student == undefined ?
              <div>
                <img src={"https://static.thenounproject.com/png/40364-200.png"} style={{"border-radius": "50%", height: "100px", width: "100px"}} />
                <Card.Subtitle style={{margin: "10px"}}>Not booked</Card.Subtitle>
              </div>
              :
              <div>
                <img src={student.imageUrl} style={{"border-radius": "50%", height: "100px", width: "100px"}} />
                <Card.Subtitle style={{margin: "10px"}}>{student.firstName} {student.lastName}</Card.Subtitle>
              </div>
            }
            <Card.Text>
              Date: {this.props.interview_.interviewDate}
              <br></br>
              Time: {this.props.interview_.interviewTime}
              <br></br>
              Location: {this.props.interview_.interviewLocation}
            </Card.Text>
            {/* This button will BOOK the meeting */}
            <div>
              {this.props.user.isInterviewer && 
                <Button variant="primary" onClick={this.editInterview}>
                  Edit
                </Button>
              }
              {this.props.interview_.isBooked?
                <Button variant="primary" style={{marginLeft: '5px'}} onClick={this.unbook}>Unbook</Button>
                :
                <Button variant="primary" style={{marginLeft: '5px'}} disabled> Unbook </Button>
              }
            </div>
            <div>
              {this.props.user.isInterviewer ?
                <Button variant="danger" style={{marginTop: "5px"}} onClick={this.removeInterview}>Remove</Button>
                : 
                null
              }
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const getStateToProps = (state) => {
  return {
    user: state.user,
    users: state.users
  }
}

const mapDispatch = dispatch => {
  return {
    unbook: (interviewId, body) => dispatch(unbookInterview(interviewId,body)),
    selectInterview: (interview) => dispatch(selectInterview(interview)),
    deleteInterview: (interview) => dispatch(deleteInterview(interview))
  }
}

export default connect(getStateToProps, mapDispatch)(BookedInterview);

