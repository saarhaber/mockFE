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
          {this.props.interviews.length > 0 ?
            this.props.interviews.filter(interview => (interview.studentId == null))
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
  }
}

export default connect(getStateToProps, {fetchInterviews, getUser})(Dashboard);
