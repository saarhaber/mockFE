import React from "react";
import {Navbar, Nav, NavDropdown, Button} from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
class NavMain extends React.Component {
  render() {
    return(
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" style={{marginLeft: "7%", marginRight: "20px"}}>MockUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/user">Profile</Link>
            <Link to="/dashboard">Bulletin</Link>
            {this.props.user.isInterviewer ? <Link to="/newInterview">Add</Link> : null}
          </Nav>
        </Navbar.Collapse>
        {this.props.user.id &&
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: {this.props.user.firstName + " " + this.props.user.lastName}
            </Navbar.Text>
            <Button variant="outline-primary" style={{marginLeft: "15px", marginRight: "7%"}}>Logout</Button>
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

export default connect(getStateToProps)(NavMain);