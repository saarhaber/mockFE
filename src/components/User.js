import React from 'react';
import './User.css';
import {Card, Button, Row, Col, Image, ListGroup, ListGroupItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import BookedInterview from './BookedInterview';
import {fetchInterviews} from '../store/actions/index';
import {deleteUser, getUser, fetchUsers} from '../store/actions/index';
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
    this.props.deleteUser(this.props.user);
    this.props.selectUser({});
    this.props.fetchUsers();
  }


  render() {
    if (!this.props.user.id) {
      // User not logged in, redirect
      return (
        <Redirect to="/login"></Redirect>
      )
    } 
    return (
      <div>
        <NavMain/>
        <div className="userPage">
          <Row style={{margin: "10vh 0"}}>
            <Col md="auto" style={{marginLeft: "auto"}}>
              <Card style={{height: "750px", width: "300px", float: "right",}}>
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
                  <Card.Link href="//linkedin.com">LinkedIn</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md="auto" style={{marginRight: "auto"}}>
              <Row>
                <Card style={{height: "180px", width: "650px", float: "left"}}>
                  <Card.Body>
                    <Card.Title>My account</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Card.Link as={Link} to="/editAccount" style={{marginRight: "10px"}}>Edit Account</Card.Link>
                    <Card.Link href="#" onClick={this.deleteUser} style={{color: "#dc3545"}}>Delete Account</Card.Link>
                  </Card.Body>
                </Card>
              </Row>
              <Row>
                <Card style={{height: "570px", width: "650px"}}>
                  <Card.Body>
                    <Card.Title>My schedule</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Check your upcoming interviews</Card.Subtitle>
                    <div style={{marginTop: "30px"}}>
                      {this.props.interviews.filter(interview => (
                        this.props.user.id == interview.studentId ||
                        this.props.user.id == interview.interviewerId
                      )).map(interview => (
                        <div style={{display: "inline-block"}}>
                          <BookedInterview interview_={interview}/>
                        </div>
                      ))}
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

export default connect(getStateToProps, {fetchInterviews, deleteUser, getUser, fetchUsers})(User);
