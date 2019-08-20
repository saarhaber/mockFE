import React from 'react';
import './Dashboard.css';
import SingleInterview from './SingleInterview';
import User from './User';
import {connect} from 'react-redux';
import {fetchInterviews} from '../store/actions/index'
import { statement } from '@babel/template';
import {Link} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import NavMain from "./NavMain";


const TAG = "DASHBOARD_JS";




class Dashboard extends React.Component {
  

  componentWillMount() {
    this.props.fetchInterviews();
  } 

  render () {
    console.log(TAG, "All interviews", this.props.interviews);
    console.log(TAG, "Selected interview", this.props.interview);
    return (
      <div> 
        <NavMain/>
        <div className="dashboard">
          {this.props.interviews.map(interview => <SingleInterview interview_={interview}/>)}       
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

export default connect(getStateToProps, {fetchInterviews})(Dashboard);
