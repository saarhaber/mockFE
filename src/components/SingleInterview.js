import React from 'react';
import './SingleInterview.css';
import {Card, Button} from 'react-bootstrap';
import {connect} from 'react-redux'
import { bookInterview, getUser, getUserById } from '../store/actions'

class SingleInterview extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getUser()
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.props.user;
    
    if (user) {
      if (user.isInterviewer) {
        console.log('interviewer cannot book interviews!');
      }
      console.log("1")
      const interview = this.props.interview_;
      console.log("2")
      interview.studentId = user.id;
      console.log("3")
      this.props.bookInterview(interview.id, interview);
    } else {
      console.error('connection error')
    }
  }

  render() {
    let interviewer_ = "";
    for (let i = 0; i < this.props.users.length; i++) {
      if (this.props.users[i].id == this.props.interview_.interviewerId) {
        interviewer_ = this.props.users[i]
      }
    }

    return (
      <div className="SingleInterview">
        <Card style={{ width: '18rem', borderRadius: '20px'}}>
            <Card.Body>
            <Card.Title>Interview with <a>{interviewer_.firstName} {interviewer_.lastName}</a></Card.Title>
              <Card.Text>
                {(this.props.interview_.interviewDate == null) ?
                "DATE OF INTERVIEW" : this.props.interview_.interviewDate}
                <br></br>
                {(this.props.interview_.interviewDate == null) ?
                "TIME OF INTERVIEW" : this.props.interview_.interviewDate}
                <br></br>
                {this.props.interview_.interviewLocation == null ?
                "LOCATION OF INTERVIEW" : this.props.interview_.interviewLocation}
                <br></br>
                {this.props.interview_.extraInfo}
              </Card.Text>
              {/* This button will BOOK the meeting */}
              <Button variant="primary" type="button" onClick={this.handleSubmit}>BOOK</Button>
            </Card.Body>
          </Card>
      </div>
    );
  }
}


const getStateToProps = state => {
  return {
    users: state.users,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    bookInterview: (interviewId, body) => dispatch(bookInterview(interviewId, body)),
    getUser: () => dispatch(getUser()),
    getUserById: id => dispatch(getUserById(id))
  }
}

export default connect(getStateToProps,mapDispatch)(SingleInterview);

