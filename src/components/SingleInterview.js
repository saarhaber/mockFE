import React from 'react';
import './SingleInterview.css';
import {Card, Button} from 'react-bootstrap';
import {connect} from 'react-redux'

class SingleInterview extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let interviewer_ = "";
    for (let i = 0; i < this.props.users.length; i++) {
      if (this.props.users[i].id == this.props.interview_.interviewerId) {
        interviewer_ = this.props.users[i]
      }
    }

    return (
      <div className="SingleInterview">
        <Card style={{ width: '18rem', borderRadius: '20px'}}>
            <Card.Body>
            <Card.Title>Interview with <a>{interviewer_.firstName} {interviewer_.lastName}</a></Card.Title>
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
  console.log(state)
  return {
    users: state.users
  }
}

export default connect(getStateToProps, {})(SingleInterview)