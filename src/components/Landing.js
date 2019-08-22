import React from "react";
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from '../store/actions';
import {Redirect} from 'react-router';
import NavMain from './NavMain.js';
import './Landing.css';


class Landing extends React.Component {
  render(){
		this.props.getUser();
		if (this.props.user.id) {
			return (
				<Redirect to="/user"/>
			)
		}
		return (
			<div style={{background: "rgba(0, 0, 0, 0.4)", height: "100vh"}}>
				<NavMain/>
				<Card style={{background: "rgba(0, 0, 0, 0)", border: "0", marginTop: "35vh"}}>
					<Card.Body style={{margin: "auto"}}>
						<Card.Title style={{color: "#dbdbdb", fontSize: "3.3em"}}>Welcome to MockUp</Card.Title>
						<Card.Text style={{color: "#dbdbdb", fontSize: "1.8em"}}>
							Where you can book mock technical interviews with experienced volunteers from the tech industry
						</Card.Text>
						<Button as={Link} to="/signup" variant="light" size="lg" style={{marginTop: "15px"}}>
							Get Started
						</Button>
					</Card.Body>
				</Card>
			</div>
		);
  }
}

{/* <Card.Text className="headtext"><h3>Welcome to MockUp</h3>
<h6 style={{color}}> Where you can book mock technical interviews with experienced volunteers from the tech industry </h6>
</Card.Text>
<Button className="button1" variant="primary">
<Link to='/login'>
	Login
</Link>
</Button>
<Button className="button1" variant="primary">
<Link to='/signup'>
	Sign Up
</Link>
</Button>
</div> */}

const getStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(getStateToProps, {getUser})(Landing); 