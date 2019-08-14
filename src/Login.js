import React from "react";
import {Form, Button, Alert} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import './Login.css';

class Login extends React.Component {
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
      <div className="login-container">
        <Form className="login-form" onSubmit={this.authenticateLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control className="form-element" name="username" type="email" placeholder="username" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control className="form-element" name="password" type="password" placeholder="password" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          {this.state.loginFailed &&
            <Alert variant={"warning"}>
              Username and password do not match
            </Alert>
          }
          <Button className="form-element" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;