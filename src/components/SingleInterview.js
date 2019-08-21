import React from 'react';
import './SingleInterview.css';
import {Card, Button} from 'react-bootstrap';
import {connect} from 'react-redux'
import { bookInterview, getUser, getUserById } from '../store/actions'

class SingleInterview extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    const dummy = this.props.getUser()
     this.setState({user: dummy})
  }

  handleSubmit(e) {
    e.preventDefault();
    
    // const user = this.state.user;
    // console.log("USER", user)
    //this is a work around
    //if getUser doesnt work
    //uncomment below
    const user = {
      "id": 1,
      "firstName": "Ajani",
      "lastName": "Stewart",
      "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
      "email": "ajani@email.com",
      "organization": "Hunter College",
      "description": "Student Web Developer paitentily waiting for the heat death of the universe",
      "profession": "student",
      "interviewAmount": 3,
      "lastInterview": "2019-08-20T16:31:30.354Z",
      "isInterviewer": false,
      "googleId": null,
      "createdAt": "2019-08-20T16:31:30.356Z",
      "updatedAt": "2019-08-20T16:31:30.356Z"
  }
    if (user) {
      if (user.isInterviewer) {
        console.log('interviewer cannot book interviews!');
      }
      console.log("1")
      const interview = this.props.interview_;
      console.log("2")
      interview.studentId = user.id;
      console.log("3")
      this.props.bookInterview(interview.id, interview);
    } else {
      console.error('connection error')
    }
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
              <Button variant="primary" type="button" onClick={this.handleSubmit}>BOOK</Button>
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

const mapDispatch = dispatch => {
  return {
    bookInterview: (interviewId, body) => dispatch(bookInterview(interviewId, body)),
    getUser: () => dispatch(getUser()),
    getUserById: id => dispatch(getUserById(id))
  }
}

export default connect(getStateToProps,mapDispatch)(SingleInterview);

// export default connect(getStateToProps, {})(SingleInterview)
// import { connect } from 'react-redux'

// import { withRouter } from 'react-router-dom'

// class SingleInterview extends React.Component {

//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const user = this.props.getUser();
//     //this is a work around
//     //if getUser doesnt work
//     //uncomment below
//   //   const user = {
//   //     "id": 1,
//   //     "firstName": "Ajani",
//   //     "lastName": "Stewart",
//   //     "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
//   //     "email": "ajani@email.com",
//   //     "organization": "Hunter College",
//   //     "description": "Student Web Developer paitentily waiting for the heat death of the universe",
//   //     "profession": "student",
//   //     "interviewAmount": 3,
//   //     "lastInterview": "2019-08-20T16:31:30.354Z",
//   //     "isInterviewer": false,
//   //     "googleId": null,
//   //     "createdAt": "2019-08-20T16:31:30.356Z",
//   //     "updatedAt": "2019-08-20T16:31:30.356Z"
//   // }
//     if (user) {
//       if (user.isInterviewer) {
//         console.error('interviewer cannot book interviews!');
//         this.props.history.push('/');
//       }
//       const interview = this.props.interview;
//       interview.studentId = user.id;
//       this.props.bookInterview(interview.id, interview);
//     } else {
//       console.error('connection error')
//     }
//   }
    

//   render() {
//     const interview = this.props.interview;
//   return (
//     <div className="SingleInterview">
//       <Card style={{ width: '18rem', borderRadius: '20px'}}>
//           <Card.Body>
//            <Card.Title>Interview</Card.Title>
//             <Card.Text>
//               Time: {interview.interviewTime}
//               <br></br>
//               Location: {interview.interviewLocation}
//               <br></br>
//               Interviewer: {interview.interviewerId}
//              </Card.Text>
//              {/* This button will BOOK the meeting */}
//              <Button variant="primary" type="button" value="book" onClick={this.handleSubmit}/>
//            </Card.Body>
//         </Card>
//     </div>
//   );
//   }
// }


