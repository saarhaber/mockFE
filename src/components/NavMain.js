import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import {logout, getUser} from '../store/actions/'
import {connect} from "react-redux";
import {Link, withRouter } from 'react-router-dom';

class NavMain extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    this.props.getUser();
  }
  logout() {
    this.props.logout();
    window.location.reload();
  }
  render() {
    return(
      <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={() => this.props.history.push("/")} style={{marginLeft: "7%", marginRight: "40px"}}>MockUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => this.props.history.push("/user")}>Profile</Nav.Link>
            <Nav.Link onClick={() => this.props.history.push("/dashboard")}>Bulletin</Nav.Link>
            {this.props.user.isInterviewer && 
              <Nav.Link as={Link} to="/newInterview">Create Interview!</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
        {this.props.user.id ?
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: {this.props.user.firstName + " " + this.props.user.lastName}
            </Navbar.Text>
            <Button variant="outline-primary" style={{marginLeft: "15px", marginRight: "10%"}} value="submit" onClick={this.logout}>
              Logout
            </Button>
          </Navbar.Collapse>
          :
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Not logged in
            </Navbar.Text>
            <Button as={Link} to="/login" variant="outline-primary" style={{marginLeft: "15px", marginRight: "10%"}}>
              Login
            </Button>
          </Navbar.Collapse>
        }
      </Navbar>
    );
  }
}

const getStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    getUser: () => dispatch(getUser()),
    logout: () => dispatch(logout())
  }
}

export default withRouter(connect(getStateToProps, mapDispatch)(NavMain));