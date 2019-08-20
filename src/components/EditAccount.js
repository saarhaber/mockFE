import React from 'react';
import {Card, Form, Button, Col, Alert, Tab, Tabs, Accordion} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {editUser} from '../store/actions/index';
import './Login.css';
import './Signup.css';
import faker from 'faker';
import NavMain from "./NavMain";


const TAG = "COMPONENTS/SIGNUP_JS"

class EditAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      profileErrors: [],
      contactErrors: [],
      passwordErrors: [],
      id: 1,
      firstName: "Ajani",
      lastName: "Stewart",
      imageUrl: "http://i.imgur.com/AItCxSs.jpg",
      email: "ajani@gmail.com",
      organization: "Hunter College",
      description: "Student Web Developer paitentily waiting for the heat death of the universe",
      profession: "student",
      interviewAmount: 3,
      lastInterview: "2019-08-19T15:46:24.399Z",
      isInterviewer: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  states = [
    "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC",  
    "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",  
    "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE",  
    "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC",  
    "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"
  ];

  errors = [
    "Unknown",
    "Passwords do not match",
    "Invalid Password",
    "Account must have an email",
    "First name cannot be empty",
    "Last name cannot be empty",
    "Select student or employee"
  ];

  profileSubmit(e) {
    e.preventDefault();

    let errorCodes = [];
    // Check inputs
    if(e.target.firstName.value) {
    } else {
      errorCodes.push(4);
    }

    if(this.state.lastName) {
    } else {
      errorCodes.push(5);
    }

    if (errorCodes.length == 0) {
    } else {
      // Show 2 errors
      if (errorCodes.length > 2) {
        errorCodes = errorCodes.slice(0, 2);
      }
      this.setState({profileErrors: errorCodes})
    }
  }
  
  contactSubmit(e) {
    e.preventDefault();

    // Check inputs
    let errorCodes= [];
    if(e.target.email.value) {
    } else {
      errorCodes.push(3);
    }

    if (errorCodes.length == 0) {
    } else {
      // Show 2 errors
      if (errorCodes.length > 2) {
        errorCodes = errorCodes.slice(0, 2);
      }
      this.setState({contactErrors: errorCodes})
    }  
  }

  passwordSubmit(e) {
    e.preventDefault();

    // Check inputs
    let errorCodes= [];

    if(e.target.password.value == e.target.confirm.value) {
    } else {
      errorCodes.push(1);
    }

    if (errorCodes.length == 0) {
    } else {
      // Show 2 errors
      if (errorCodes.length > 2) {
        errorCodes = errorCodes.slice(0, 2);
      }
      this.setState({passwordErrors: errorCodes})
    }  
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    if (this.state.redirect) {
      return(
        <Redirect to="/user"/> 
      );
    }

    return (
      <div className="Login">
        <NavMain/>
        <Card className="login-card" style={{margin: "10vh 20vh"}}>
          <Card.Header>Update Account Info</Card.Header>
          <Card.Body>
            <Tabs defaultActiveKey="profile">
              <Tab eventKey="profile" title="Profile" className="profileTab">
                <Form onSubmit={this.profileSubmit.bind(this)}>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control name="firstName" type="name" value={this.state.firstName} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control name="lastName" type="name" value={this.state.lastName} onChange={this.handleChange}/>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control name="city"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control name="state" as="select">
                        <option>Choose...</option>
                        {
                          this.states.map(state => (
                            <option>{state}</option>
                          ))
                        }
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control name="zip"/>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Bio</Form.Label>
                      <Form.Control name="description" as="textarea" rows="3" value={this.state.description} onChange={this.handleChange}/>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Organization</Form.Label>
                      <Form.Control name="organization" type="text" value={this.state.organization} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Profession</Form.Label>
                      <Form.Control name="profession" type="text" value={this.state.profession} onChange={this.handleChange}/>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Resume</Form.Label>
                      <Form.Control name="resume" type="file" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Accordion defaultActiveKey="0" style={{marginTop: "30px"}}>
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                              Image Upload
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <Form.Control name="image" type="file" />
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                              Image URL
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <Form.Label>Link to Image</Form.Label>
                              <Form.Control name="imageUrl" type="text" value={this.state.imageUrl} onChange={this.handleChange}/>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Form.Group>
                  </Form.Row>
                  {this.state.profileErrors.map(errorCode => (
                    <Alert variant={"warning"}>
                      {this.errors[errorCode]}
                    </Alert>
                  ))}
                  <Button variant="primary" type="submit" className="edit-form-btn">
                    Submit
                  </Button>
                </Form>
              </Tab>
              <Tab eventKey="contact" title="Contact" className="profileTab">
                <Form onSubmit={this.contactSubmit.bind(this)}>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGroupEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control name="email" type="email" value={this.state.email} name="email" onChange={this.handleChange} />
                      <Form.Text className="text-muted" style={{marginLeft: '3px'}}>
                        We'll never share your email with anyone.
                      </Form.Text>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Phone</Form.Label>
                      <Form.Control name="phone" type="tel" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="a">
                      <Form.Label>LinkedIn</Form.Label>
                      <Form.Control name="linkedin" type="text" />
                    </Form.Group>
                  </Form.Row>

                  {this.state.contactErrors.map(errorCode => (
                    <Alert variant={"warning"}>
                      {this.errors[errorCode]}
                    </Alert>
                  ))}
                  <Button variant="primary" type="submit" className="edit-form-btn">
                    Submit
                  </Button>
                </Form>
              </Tab>
              <Tab eventKey="security" title="Security" className="profileTab">
                <Form onSubmit={this.passwordSubmit.bind(this)}>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formBasicPassword">
                      <Form.Label>Current Password</Form.Label>
                      <Form.Control className="form-element" name="passwordold" type="password"/>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formBasicPassword">
                      <Form.Label>New Password</Form.Label>
                      <Form.Control className="form-element" name="password" type="password"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formBasicPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control className="form-element" name="confirm" type="password"/>
                    </Form.Group>
                  </Form.Row>
                  {this.state.passwordErrors.map(errorCode => (
                    <Alert variant={"warning"}>
                      {this.errors[errorCode]}
                    </Alert>
                  ))}
                  <Button variant="primary" type="submit" className="edit-form-btn">
                    Submit
                  </Button>
                </Form>
              </Tab>
            </Tabs>
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
export default connect(getStateToProps, {editUser})(EditAccount);