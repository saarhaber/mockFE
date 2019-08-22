import React from 'react';
import './SingleInterview.css';
import {Card, Button, Toast } from 'react-bootstrap';
import {connect} from 'react-redux'
import { bookInterview, getUser, getUserById } from '../store/actions'
import { withRouter } from 'react-router-dom'

class SingleInterview extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isLoggedIn = null;
  }

  componentDidMount() {
    this.props.getUser();
    this.isLoggedIn = Boolean(this.props.user.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.props.user;
    if (!this.isLoggedIn) {
      return this.props.history.push("/login");
    }
    if (user) {
      if (user.isInterviewer) {
        return console.log('interviewer cannot book interviews!');
      }
      const interview = this.props.interview_;
      interview.studentId = user.id;
      interview.isBooked = true;
      this.props.bookInterview(interview.id, interview);
    } else {
      console.error('connection error');
    }
  }

  render() {
    let interviewer_ = "";
    for (let i = 0; i < this.props.users.length; i++) {
      if (Number(this.props.users[i].id) === Number(this.props.interview_.interviewerId)) {
        interviewer_ = this.props.users[i]
      }
    }

    return (
      <div className="SingleInterview">
        <Card style={{ width: '18rem', borderRadius: '20px'}}>
            <Card.Body>
            <Card.Title>Interview with <strong>{interviewer_.firstName} {interviewer_.lastName}</strong></Card.Title>
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
              {
                this.props.user.isInterviewer
                ? <Button variant="secondary">BOOK</Button>
                : <Button variant="primary" type="button" onClick={this.handleSubmit}>BOOK</Button>
              }
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

export default withRouter(connect(getStateToProps,mapDispatch)(SingleInterview));

