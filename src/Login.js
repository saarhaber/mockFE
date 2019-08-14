import React from "react";
import {Form, Button} from 'react-bootstrap';
import "./Login.css"

class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <Form className="login-form">
          <Form.Group controlId="formBasicEmail">
            <Form.Control className="form-element" type="email" placeholder="username" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control className="form-element" type="password" placeholder="password" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button className="form-element" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;