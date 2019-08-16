import React from "react";
import {Card, Form, Button, Alert} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectUser, fetchUsers} from '../store/actions/index';
import './Login.css';

const TAG = "COMPONENTS/LOGIN_JS";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      loginFailed: false
    }
    this.authenticateLogin = this.authenticateLogin.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  authenticateLogin(e) {
    e.preventDefault();
    console.log("Submitted");

    console.log(this.props.users)
    // Search for user in the store
    const user = this.props.users.find(a_user => (
      a_user.email == e.target.username.value &&
      a_user.password == e.target.password.value 
    ));

    // Select student if found
    if (user) {
      this.props.selectUser(user);
      this.setState({redirect: true});
    } else {
      this.setState({loginFailed: true});
    }
  }

  render() {
    console.log(TAG, "users: ", this.props.users);
    console.log(TAG, "user: ", this.props.user);

    if (this.state.redirect) {
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
              {this.state.loginFailed &&
                <Alert variant={"warning"}>
                  Username and password do not match
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
    user: state.user
  }
}

export default connect(getStateToProps, {selectUser, fetchUsers})(Login);