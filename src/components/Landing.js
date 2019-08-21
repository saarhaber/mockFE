import React from "react";
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from '../store/actions';
import {Redirect} from 'react-router';

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
			<div className="heading">
				<Card.Text className="headtext"><h3>Welcome to MockUp</h3>
					<h6> Where you can book mock technical interviews with experienced volunteers from the tech industry </h6>
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
			</div>
		);
  }
}

const getStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(getStateToProps, {getUser})(Landing); 