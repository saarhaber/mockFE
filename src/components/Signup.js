import React from "react";
import {Card, Form, Button, Col, Alert} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './Login.css';
import './Signup.css';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
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
  
  error = {
    1: "Passwords do not match",
    2: "Enter a valid email address",
    3: "First name cannot be empty",
    4: "Last name cannot be empty"
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
                    label="Employer"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                />
                <Form.Check
                    className="text-muted"
                    type="radio"
                    label="Student"
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

const getStateToProps = (state) => {
  return {
    users: state.users,
    user: state.user
  }
}
export default connect()(Signup);