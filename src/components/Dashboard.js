import React from 'react';
import './Dashboard.css';
import SingleInterview from './SingleInterview';
import {connect} from 'react-redux';
import { statement } from '@babel/template';

const TAG = "DASHBOARD_JS";

class Dashboard extends React.Component {
  render () {
    console.log(TAG, "All interviews", this.props.interviews);
    console.log(TAG, "Selected interview", this.props.interview);
    return (
      <div>
        <div className="heading">
          <h1> Click "BOOK" to set up an Interview</h1>
        </div>
        <div className="dashboard">
          <SingleInterview/>
          <SingleInterview/>
          <SingleInterview/>
          <SingleInterview/>
          <SingleInterview/>
          <SingleInterview/>
          <SingleInterview/>
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

export default connect(getStateToProps, {})(Dashboard);
