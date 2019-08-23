import React from 'react';
import './User.css';
import {Card, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link, Redirect, withRouter} from 'react-router-dom';
import BookedInterview from './BookedInterview';
import {deleteUser, getUser, fetchUsers, fetchInterviews, logout} from '../store/actions/index';
import NavMain from "./NavMain";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    this.props.getUser();
    this.props.fetchInterviews();
    
  }

  deleteUser() {
    this.props.logout();
    this.props.deleteUser(this.props.user);
    this.props.history.push("/");
  }


  render() {
    if (!this.props.user.id) {
      // User not logged in, redirect
      return (
        <Redirect to="/login"></Redirect>
      )
    }
    console.log(this.props.interviews)
    return (
      <div>
        <NavMain/>
        <div className="userPage">
          <Row style={{margin: "5vh 0"}}>
            <Col md="auto" style={{marginLeft: "auto"}}>
              <Card style={{height: "700px", width: "300px", float: "right",}}>
              <Card.Img variant="top" src={this.props.user.imageUrl} />
                <Card.Body>
                  <Card.Title>
                    {this.props.user.firstName + " " + this.props.user.lastName}
                  </Card.Title>
                  {this.props.user.isInterviewer ?
                    <Card.Subtitle>Interviewer</Card.Subtitle> : 
                    <Card.Subtitle>Interviewee</Card.Subtitle> 
                  }
                  <Card.Text style={{marginTop: "15px"}}>{this.props.user.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{this.props.user.profession}</ListGroupItem>
                  {this.props.user.isInterviewer ?
                    <ListGroupItem>Company: {this.props.user.organization}</ListGroupItem> : 
                    <ListGroupItem>University: {this.props.user.organization}</ListGroupItem> 
                  }
                  <ListGroupItem>Total Interviews: {this.props.user.interviewAmount}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href={"//" + this.props.user.email}>Email</Card.Link>
                  <Card.Link href={this.props.user.linkedInLink ? this.props.user.linkedInLink : "#"}>LinkedIn</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md="auto" style={{marginRight: "auto"}}>
              <Row>
                <Card style={{height: "180px", width: "650px", float: "left"}}>
                  <Card.Body>
                    <Card.Title>Account Dashboard</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Welcome back!
                    </Card.Subtitle>
                    <Card.Text>
                      From your account dashboard, you can update profile information, view schedule and manage interviews.
                    </Card.Text>
                    <Card.Link as={Link} to="/editAccount" style={{marginRight: "10px"}}>Edit Account</Card.Link>
                    <Card.Link href="#" onClick={this.deleteUser} style={{color: "#dc3545"}}>Delete Account</Card.Link>
                  </Card.Body>
                </Card>
              </Row>
              <Row>
                <Card style={{height: "520px", width: "650px"}}>
                  <Card.Body>
                    <Card.Title>My schedule</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Check your upcoming interviews</Card.Subtitle>
                    <div style={{marginTop: "30px", marginBotton: "10px"}}>
                      {this.props.interviews.filter(interview => (
                        Number(this.props.user.id) === Number(interview.studentId) ||
                        Number(this.props.user.id) === Number(interview.interviewerId)
                      ))
                      .slice(0, 3)
                      .map(filteredInterview => (
                        <div style={{display: "inline-block"}}>
                          <BookedInterview interview_={filteredInterview}/>
                        </div>
                      ))}
                    </div>
                    <div style={{marginTop: "15px"}}>
                      {this.props.interviews.filter(interview => (
                        Number(this.props.user.id) === Number(interview.studentId) ||
                        Number(this.props.user.id) === Number(interview.interviewerId)
                      )).length > 0 ?
                        <Card.Link as={Link} to="/userdashboard">All my intervews</Card.Link>
                        :
                        <Card.Text className="mb-2 text-muted">You have no interviews</Card.Text>
                      }
                    </div>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const getStateToProps = (state) => {
  return {
    users: state.users,
    user: state.user,
    interviews: state.interviews
  }
}

export default withRouter(connect(getStateToProps, {fetchInterviews, deleteUser, getUser, fetchUsers, logout})(User));
