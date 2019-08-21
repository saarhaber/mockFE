import React from 'react';
import './SingleInterview.css';
import {Card, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom'
import {deleteInterview} from '../store/actions'

class BookedInterview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
    this.removeInterview = this.removeInterview.bind(this)
  }

  removeInterview = event => {
    event.preventDefault()
    console.log("Starting remove")
    this.props.deleteInterview(this.props.interview_)
    this.setState({
      redirect: true
    })
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to="/login" />
      )
    }
    return (
      <div className="SingleInterview">
        <Card style={{ width: '18rem', borderRadius: '20px'}}>
          <Card.Body>
            <Card.Text>
            {this.props.interview_.interviewDate}
              <br></br>
              {this.props.interview_.interviewTime}
              <br></br>
              {this.props.interview_.interviewLocation}
              <br></br>
              {this.props.interview_.extraInfo}
            </Card.Text>
            {/* This button will BOOK the meeting */}
            {this.props.user.isInterviewer && 
              <Button variant="primary" as={Link} to={"/interviews/" + this.props.interview_.id + "/editInterview"}>
                Edit
              </Button>
            }
            <Button variant="primary" style={{marginLeft: '5px'}}>unbook</Button>
            {
              this.props.user.isInterviewer ?
              <Button 
                variant="danger" 
                style={{marginLeft: '5px'}} 
                onClick={this.removeInterview}>Remove</Button>
              :
              null
            }
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const getStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(getStateToProps, {
  deleteInterview
})(BookedInterview);

