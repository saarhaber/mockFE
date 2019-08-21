import React from 'react';
import './SingleInterview.css';
import {Card, Button} from 'react-bootstrap';
import { connect } from 'react-redux'
import { bookInterview, getUser, getUserById } from '../store/actions'
import { withRouter } from 'react-router-dom'

class SingleInterview extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.props.getUser();
    //this is a work around
    //if getUser doesnt work
    //uncomment below
  //   const user = {
  //     "id": 1,
  //     "firstName": "Ajani",
  //     "lastName": "Stewart",
  //     "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
  //     "email": "ajani@email.com",
  //     "organization": "Hunter College",
  //     "description": "Student Web Developer paitentily waiting for the heat death of the universe",
  //     "profession": "student",
  //     "interviewAmount": 3,
  //     "lastInterview": "2019-08-20T16:31:30.354Z",
  //     "isInterviewer": false,
  //     "googleId": null,
  //     "createdAt": "2019-08-20T16:31:30.356Z",
  //     "updatedAt": "2019-08-20T16:31:30.356Z"
  // }
    if (user) {
      if (user.isInterviewer) {
        console.error('interviewer cannot book interviews!');
        this.props.history.push('/');
      }
      const interview = this.props.interview;
      interview.studentId = user.id;
      this.props.bookInterview(interview.id, interview);
    } else {
      console.error('connection error')
    }
  }
    

  render() {
    const interview = this.props.interview;
  return (
    <div className="SingleInterview">
      <Card style={{ width: '18rem', borderRadius: '20px'}}>
          <Card.Body>
           <Card.Title>Interview</Card.Title>
            <Card.Text>
              Time: {interview.interviewTime}
              <br></br>
              Location: {interview.interviewLocation}
              <br></br>
              Interviewer: {interview.interviewerId}
             </Card.Text>
             {/* This button will BOOK the meeting */}
             <Button variant="primary" type="button" value="book" onClick={this.handleSubmit}/>
           </Card.Body>
        </Card>
    </div>
  );
  }
}

const mapDispatch = dispatch => {
  return {
    bookInterview: (interviewId, body) => dispatch(bookInterview(interviewId, body)),
    getUser: () => dispatch(getUser()),
    getUserById: id => dispatch(getUserById(id))
  }
}

export default withRouter(connect(null,mapDispatch)(SingleInterview));
