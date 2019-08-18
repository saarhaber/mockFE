import React from "react";
import {Card, Form, Button, Alert} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchUsers, login, getUser} from '../store/actions/index';
import './Login.css';

const TAG = "COMPONENTS/LOGIN_JS";

class Login extends React.Component {
  constructor() {
    super();
    this.authenticateLogin = this.authenticateLogin.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  async authenticateLogin(e) {
    e.preventDefault();

    const loginInfo = {
      email: e.target.username.value,
      password: e.target.password.value
    }

    // make a post request using the action creator
    await this.props.login(loginInfo);
  }

  render() {
    console.log(TAG, "users: ", this.props.users);
    console.log(TAG, "response: ", this.props.serverResponse);

    // Get user from api/auth/me
    if (this.props.serverResponse) {
      this.props.getUser();
    }

    // Redirect if already logged in
    if (this.props.user.id) {
      return(
        <Redirect to="/user"/>
      );
    }
    return (
      <div className="Login">
        <Card className="login-card">
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Form onSubmit={this.authenticateLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control className="form-element" name="username" type="email" placeholder="username"/>
                <Form.Text className="text-muted" style={{marginLeft: '3px'}}>
                  We'll never share your email with anyone.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control className="form-element" name="password" type="password" placeholder="password"/>
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Remember Me" style={{marginLeft: '3px'}}/>
              </Form.Group>
              {this.props.serverResponse.message &&
                <Alert variant={"warning"}>
                  {this.props.serverResponse.message}
                </Alert>
              }
              <Button className="form-element" variant="primary" type="submit">
                Submit
              </Button>
              <Form.Text className="text-muted" style={{marginTop: '10px', marginLeft: '1px'}}>
                Don't have an account?
                <Link to="/signup" style={{marginLeft: '3px'}}>Sign up</Link>
              </Form.Text>
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
    user: state.user,
    serverResponse: state.serverResponse
  }
}

export default connect(getStateToProps, {fetchUsers, login, getUser})(Login);