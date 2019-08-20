import React from 'react';
import './User.css';
import {Card, Button, Row, Col, Image} from 'react-bootstrap';
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
                <img src={this.props.user.imageUrl} />
                <Card.Body>
                  <Card.Title>{this.props.user.firstName + " " + this.props.user.lastName}</Card.Title>
                  <Card.Subtitle>{this.props.user.organization}</Card.Subtitle>
                  <Card.Text style={{marginTop: "10px"}}>{this.props.user.description}</Card.Text>
                  <div className="blob" style={{marginTop: "10px"}}>
                    <Card.Text style={{margin: "0"}}>Company: {this.props.user.organization}</Card.Text>
                    <Card.Text style={{margin: "0"}}>Email: {this.props.user.email}</Card.Text>
                    <Card.Text style={{margin: "0"}}>Total Interviews: {this.props.user.interviewAmount}</Card.Text>
                  </div>
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
                    <Link to="/editAccount" style={{marginRight: "10px"}}>Edit Account</Link>
                    <Card.Link href="#" onClick={this.deleteUser}>Delete Account</Card.Link>
                  </Card.Body>
                </Card>
              </Row>
              <Row>
                <Card style={{height: "570px", width: "650px"}}>
                  <Card.Body>
                    <Card.Title>My schedual</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Check your upcoming interviews</Card.Subtitle>
                    <div style={{display: "flex"}}>
                      {this.props.interviews.map(interview => (
                        <BookedInterview style={{display: "inline-block"}} props={interview}/>
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
