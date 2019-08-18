import React from 'react';
import {Card, Form, Button, Col, Alert, Tab, Tabs, Accordion} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {editUser} from '../store/actions/index';
import './Login.css';
import './Signup.css';
import faker from 'faker';


const TAG = "COMPONENTS/SIGNUP_JS"

class EditAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      errorCodes: [],
    }
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  errors = [
    "Unknown",
    "Passwords do not match",
    "Invalid Password",
    "Account must have an email",
    "First name cannot be empty",
    "Last name cannot be empty",
    "Select student or employee"
  ];

  render() {
    if (this.state.redirect) {
      return(
        <Redirect to="/user"/> 
      );
    }

    return (
      <div className="Login">
        <Card className="login-card" style={{margin: "10vh 20vh"}}>
          <Card.Header>Update Account Info</Card.Header>
          <Card.Body>
            <Tabs defaultActiveKey="profile">
              <Tab eventKey="profile" title="Profile" className="profileTab">
                <Form>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="name" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="name" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control as="select">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Bio</Form.Label>
                      <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Organization</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Profession</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Resume</Form.Label>
                      <Form.Control type="file" />
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
                              <Form.Control type="file" />
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
                              <Form.Control type="text" />
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Form.Group>
                  </Form.Row>
                  <Button variant="primary" type="submit" className="edit-form-btn">
                    Submit
                  </Button>
                </Form>
              </Tab>
              <Tab eventKey="contact" title="Contact" className="profileTab">
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGroupEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" />
                      <Form.Text className="text-muted" style={{marginLeft: '3px'}}>
                        We'll never share your email with anyone.
                      </Form.Text>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Phone</Form.Label>
                      <Form.Control type="tel" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="a">
                      <Form.Label>LinkedIn</Form.Label>
                      <Form.Control type="tel" />
                    </Form.Group>
                  </Form.Row>

                  <Button variant="primary" type="submit" className="edit-form-btn">
                    Submit
                  </Button>
                </Form>
              </Tab>
              <Tab eventKey="security" title="Security" className="profileTab">
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formBasicPassword">
                      <Form.Label>Current Password</Form.Label>
                      <Form.Control className="form-element" name="password" type="password"/>
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