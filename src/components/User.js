import React from 'react';
import './User.css';
import {Card, Button} from 'react-bootstrap';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.user_id,
            firstName: this.props.user_firstName,
            lastName: this.props.user_lastName,
            imageUrl: this.props.user_imageUrl,
            email: this.props.user_email,
            organization: this.props.user_organization,
            description: this.props.user_description,
            profession: this.props.user_student,
            interviewAmount: this.props.user_interviewAmount,
            lastInterview: this.props.user_lastInterview,
            isInterviewer: this.props.user_isInterviewer
        }
    }
  render() {
  return (
    <div className="User">
      <Card style={{ width: '18rem', borderRadius: '20px'}}>
          <Card.Body>
           <Card.Title>{this.state.firstName} {this.state.lastName}</Card.Title>
           <img src={this.state.imageUrl}/>
           <Card.Text>
               <br></br>
            {this.state.email} <br></br> 
            {this.state.organization} <br></br> 
            {this.state.description} <br></br> 
            {this.state.student} <br></br> 
           </Card.Text>
           <Card.Title>Interviews</Card.Title>
             {/* This button will ADD an interview the meeting */}
             <Button variant="primary">ADD</Button>
           </Card.Body>
        </Card>
    </div>
  );
  }
}

export default User;
