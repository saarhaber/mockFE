import React from 'react';
import './SingleInterview.css';
import {Card, Button, Toast } from 'react-bootstrap';
import {connect} from 'react-redux'
import { bookInterview, getUser, getUserById, fetchUsers } from '../store/actions'
import { withRouter } from 'react-router-dom'

class SingleInterview extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isLoggedIn = null;
    this.state = {
      interviewer: {}
    }
  }

  async componentDidMount() {
    this.props.getUser();
    await this.props.fetchUsers()
    console.log(this.props.users)
    //console.log("Interview ID !!!", this.props.interview_.interviewerId)
    for (let i = 0; i < this.props.users.length; i++) {
      console.log("RUNNNING FOR", this.props.users[i].id)
      if (this.props.users[i].id == this.props.interview_.interviewerId) {
        console.log("RUNNNING IF STATEMNT")
        this.setState({
          interviewer: this.props.users[i]
        })
      }
    }
    console.log("end of forloop in DidMount!!!", this.state.interviewer)
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
    let interviewer__;
    for (let i = 0; i < this.props.users.length; i++) {
      if (this.props.users[i].id == this.props.interview_.interviewerId) {
        interviewer__ = this.props.users[i]
      }
    }
    return (
      <div className="SingleInterview">
        <Card style={{ width: '18rem', borderRadius: '20px'}}>
            <Card.Body>
              {interviewer__ ? <img src={interviewer__.imageUrl} style={{"width": "100px", "border-radius": "50%"}} /> : null}
            <Card.Title>Interview with <strong>{interviewer__ ? interviewer__.firstName : null} {interviewer__ ? interviewer__.lastName : null}</strong></Card.Title>
              <Card.Text>
                {(this.props.interview_.interviewDate == null) ?
                "DATE OF INTERVIEW" : this.props.interview_.interviewDate}
                <br></br>
                {(this.props.interview_.interviewDate == null) ?
                "TIME OF INTERVIEW" : this.props.interview_.interviewTime}
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
  console.log(state.users)
  return {
    users: state.users,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    bookInterview: (interviewId, body) => dispatch(bookInterview(interviewId, body)),
    getUser: () => dispatch(getUser()),
    getUserById: id => dispatch(getUserById(id)),
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default withRouter(connect(getStateToProps,mapDispatch)(SingleInterview));

