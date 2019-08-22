import React from 'react';
import './Dashboard.css';
import SingleInterview from './SingleInterview';
import {connect} from 'react-redux';
import {fetchInterviews, getUser} from '../store/actions/index'
import NavMain from "./NavMain";


class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchInterviews();
  } 

  render () {
    return (
      <div> 
        <NavMain/>
        <div className="dashboard">
          {
            this.props.interviews.filter(interview => (interview.studentId == null))
            .map(interview => <SingleInterview interview_={interview}/>)
          }       
        </div>
      </div>
    );
  }
}

const getStateToProps = (state) => {
  return {
    interviews: state.interviews,
    interview: state.interview
  }
}

export default connect(getStateToProps, {fetchInterviews, getUser})(Dashboard);
