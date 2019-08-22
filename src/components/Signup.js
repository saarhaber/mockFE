import React from 'react';
import {Card, Form, Button, Col, Alert} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {signup, getUser} from '../store/actions/index';
import './Login.css';
import './Signup.css';
import faker from 'faker';
import NavMain from "./NavMain";


const TAG = "COMPONENTS/SIGNUP_JS"

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      errorCodes: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    console.log(TAG, "Submitted");

    let errorCodes = [];

    let newUser = {
      firstName: undefined,
      lastName: undefined,
      password: undefined,
      imageUrl: faker.image.avatar(),
      email: undefined,
      organization: "None",
      description: "None",
      profession: "None",
      interviewAmount: 0,
      lastInterview: "2019-08-16T18:46:08.921Z",
      isInterviewer: undefined
    }

    // Check inputs
    if(e.target.firstname.value) {
      newUser.firstName= e.target.firstname.value;
    } else {
      errorCodes.push(4);
    }

    if(e.target.lastname.value) {
      newUser.lastName= e.target.lastname.value;
    } else {
      errorCodes.push(5);
    }

    if(e.target.email.value) {
      newUser.email= e.target.email.value;
    } else {
      errorCodes.push(3);
    }

    // Check passwords
    if(e.target.password) {
      if (e.target.confirm.value !== e.target.password.value) {
        errorCodes.push(1);
      } else {
        newUser.password = e.target.password.value;
      }
    } else {
      errorCodes.push(2);
    }

    if(e.target.formRadio.value) {
      newUser.isInterviewer = e.target.formRadio.value;
    } else {
      errorCodes.push(6);
    }

    // If a valid input is received, create user
    if (errorCodes.length === 0) {
      this.props.signup(newUser);
      this.setState({redirect: true});
    } else {
      // Show 2 errors
      if (errorCodes.length > 2) {
        errorCodes = errorCodes.slice(0, 2);
      }
      this.setState({errorCodes: errorCodes})
    }
  }

  render() {
    // Get currently logged in user
    this.props.getUser();

    // Redirect if already logged in
    if (this.props.user.id) {
      return(
        <Redirect to="/user"/>
      );
    }
    if (this.state.redirect) {
      return (
      <Redirect to="/login"/>
      );
    }
    return (
      <div className="Login">
        <NavMain/>
        <Card className="login-card">
          <Card.Header>Create an Account</Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control type="name" name="firstname" placeholder="First Name" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control type="name" name="lastname" placeholder="Last Name" />
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="formBasicEmail">
                <Form.Control name="email" type="email" placeholder="Email" />
                <Form.Text className="text-muted" style={{marginLeft: '3px'}}>
                  We'll never share your email with anyone.
                </Form.Text>
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formBasicPassword">
                  <Form.Control className="form-element" name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicPassword">
                  <Form.Control className="form-element" name="confirm" type="password" placeholder="Confirm Password" />
                </Form.Group>
              </Form.Row>
              <div className="radio-btns">
                <Form.Check
                    className="text-muted"
                    value={1}
                    type="radio"
                    label="Employer"
                    name="formRadio"
                    id="formHorizontalRadios1"
                />
                <Form.Check
                    className="text-muted"
                    value={0}
                    type="radio"
                    label="Student"
                    name="formRadio"
                    id="formHorizontalRadios2"
                />
              </div>
              {this.state.errorCodes.map(errorCode => (
                <Alert variant={"warning"}>
                  {this.errors[errorCode]}
                </Alert>
              ))}
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Form.Text className="text-muted" style={{marginTop: '10px', marginLeft: '1px'}}>
                Already have an account?
                <Link to="/login" style={{marginLeft: '3px'}}>Log in</Link>
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
    user: state.user,
    users: state.users
  }
}
export default connect(getStateToProps, {signup, getUser})(Signup);