import React from "react";
import {Card, Form, Button, Col, Alert} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import './Login.css';
import './Signup.css';

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
                <Form.Text className="text-muted">
                  We'll never share your email with anyone.
                </Form.Text>
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formBasicPassword">
                  <Form.Control className="form-element" name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicPassword">
                  <Form.Control className="form-element" name="confirm" type="password" placeholder="Confirm password" />
                </Form.Group>
              </Form.Row>
              <div className="radio-btns">
                <Form.Check
                    className="text-muted"
                    type="radio"
                    label="first radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                />
                <Form.Check
                    className="text-muted"
                    type="radio"
                    label="second radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                />
              </div>
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