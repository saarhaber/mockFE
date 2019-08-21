import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import {logout} from '../store/actions/'
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

class NavMain extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
    window.location.reload();
  }
  render() {
    return(
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" style={{marginLeft: "7%", marginRight: "40px"}}>MockUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/user">Profile</Nav.Link>
            <Nav.Link href="/dashboard">Bulletin</Nav.Link>
            {this.props.user.isInterviewer && 
              <Nav.Link as={Link} to="/newInterview">Create Interview!</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
        {this.props.user.id &&
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: {this.props.user.firstName + " " + this.props.user.lastName}
            </Navbar.Text>
            <Button variant="outline-primary" style={{marginLeft: "15px", marginRight: "7%"}} value="submit" onClick={this.logout}>
              Logout
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

export default connect(getStateToProps, {logout})(NavMain);