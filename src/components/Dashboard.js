import React from 'react';
import './Dashboard.css';
import SingleInterview from './SingleInterview';

class Dashboard extends React.Component {
  render () {
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

export default Dashboard;
