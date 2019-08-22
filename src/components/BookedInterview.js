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
        <Card style={{ width: '18rem', borderRadius: '20px'}}>
          <Card.Body>
            {
              student == undefined ?
              null
              :
              <div>
                <p>{student.firstName} {student.lastName}</p>
                <img src={student.imageUrl} style={{"border-radius": "50%"}} />
              </div>
            }
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
            <Button variant="danger" style={{marginLeft: '5px'}} onClick={this.removeInterview}>Remove</Button>
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

