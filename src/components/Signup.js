import React from "react";
import {Card, Form, Button, Col, Alert} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import './Login.css';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "pokiki@myhunter.cuny.edu",
      password: "Add211",
      redirect: false,
      loginFailed: false
    }
    this.authenticateLogin = this.authenticateLogin.bind(this);
  }

  authenticateLogin(e) {
    e.preventDefault();
    console.log("Submitted");
    const login_success = (
      e.target.username.value == this.state.username &&
      e.target.password.value == this.state.password
    );

    if (login_success) {
      this.setState({redirect: true});
    } else {
      this.setState({loginFailed: true});
    }
  }
  

  render() {
    if (this.state.redirect) {
      return(
        <Redirect to="/dashboard"/>
      );
    }
    return (
      <div className="Login">
        <Card className="login-card">
          <Card.Header>Create an Account</Card.Header>
          <Card.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control type="name" name="firstname" placeholder="First name" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control type="name" name="lastname" placeholder="Last name" />
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="formBasicEmail">
                <Form.Control name="email" placeholder="Email" />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control placeholder="City"/>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control as="select">
                    <option>State</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>
              <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Signup;