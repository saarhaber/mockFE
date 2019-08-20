import React from 'react';
import './SingleInterview.css';
import {Card, Button} from 'react-bootstrap';
import {connect} from 'react-redux'

class SingleInterview extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.users)
    const interviewer_ = "";
    for (let i = 0; i < this.props.users.length; i++) {
      console.log(this.props.users[i])
      if (this.props.users[i].id == this.props.interview_.interviewerId) {
        interviewer_ = this.props.users[i]
      }
    }
    console.log(interviewer_)

    return (
      <div className="SingleInterview">
        <Card style={{ width: '18rem', borderRadius: '20px'}}>
            <Card.Body>
            <Card.Title>Interview</Card.Title>
              <Card.Text>
                {(this.props.interview_.interviewDate == null) ?
                "DATE OF INTERVIEW" : this.props.interview_.interviewDate}
                <br></br>
                {(this.props.interview_.interviewDate == null) ?
                "TIME OF INTERVIEW" : this.props.interview_.interviewDate}
                <br></br>
                {this.props.interview_.interviewLocation == null ?
                "LOCATION OF INTERVIEW" : this.props.interview_.interviewLocation}
                <br></br>
                {this.props.interview_.extraInfo}
              </Card.Text>
              {/* This button will BOOK the meeting */}
              <Button variant="primary">BOOK</Button>
            </Card.Body>
          </Card>
      </div>
    );
  }
}


const getStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(getStateToProps)(SingleInterview)