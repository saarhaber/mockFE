import React from 'react';
import './Dashboard.css';
import SingleInterview from './SingleInterview';

function Dashboard(props) {
  const {interviews} = props;
  console.log(interviews);
  return (
  <div>
    <div className="heading">
      <h1> Click "BOOK" to set up an Interview</h1>
    </div>
    <div className="dashboard">
      {interviews.map(interview => <SingleInterview
      props = {interview}
      />)
      }
    </div>
  </div>
  );
}

export default Dashboard;
