import React from 'react';
import './Dashboard.css';
import SingleInterview from './BookedInterview';
import {connect} from 'react-redux';
import {fetchInterviews, getUser} from '../store/actions/index'
import NavMain from "./NavMain";


class UserDashboard extends React.Component {
  componentWillMount() {
    this.props.fetchInterviews();

  } 

  render () {
    return (
      <div> 
        <NavMain/>
        <div className="dashboard">
          {this.props.interviews.length > 0 ?
            this.props.interviews.filter(interview => (interview.studentId == this.props.user.id || interview.interviewerId == this.props.user.id))
            .map(interview => <SingleInterview key={interview.id} interview_={interview}/>)
            :
            <div className="mb-2 text-muted">You have no interviews</div>
          }       
        </div>
      </div>
    );
  }
}

const getStateToProps = (state) => {
  return {
    interviews: state.interviews,
    interview: state.interview,
    user: state.user
  }
}

export default connect(getStateToProps, {fetchInterviews, getUser})(UserDashboard);
