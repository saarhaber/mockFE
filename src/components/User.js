import React from 'react';
import './User.css';
import {Card, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import SingleInterview from './SingleInterview';
import {fetchInterviews} from '../store/actions/index';

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      this.props.fetchInterviews();
    }


  render() {
    if (!this.props.user.id) {
      // User not logged in, redirect
      return (
        <Redirect to="/login"></Redirect>
      )
    } 
    return ( <div>
      <Card>
        <div className="heading">
          <Button className="button" variant="primary"> <Link to='/dashboard'>
            Dashboard
          </Link> </Button>
        </div> </Card> 
      <div className="User">
        <Card style={{ width: '18rem', borderRadius: '20px'}}>
          <Card.Body>
          <Card.Title>{this.props.user.firstName} {this.props.user.lastName}</Card.Title>
          <img src={this.props.user.imageUrl}/>
          <Card.Text>
            <br></br>
            {this.props.user.email} <br></br> 
            {this.props.user.organization} <br></br> 
            {this.props.user.description} <br></br> 
            {this.props.user.student} <br></br> 
          </Card.Text>
          <Card.Title>Interviews</Card.Title>
          {this.props.interviews.map(interview =><SingleInterview props = {interview}/>)}          
            {/* This button will ADD an interview the meeting */}
            <Button variant="primary">ADD</Button>
          </Card.Body>
        </Card>
      </div>
      </div>
    );
  }
}

const getStateToProps = (state) => {
  return {
    users: state.users,
    user: state.user,
    interviews: state.interviews
  }
}

export default connect(getStateToProps, {fetchInterviews})(User);
