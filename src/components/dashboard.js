import React from 'react';
import './dashboard.css';
import singleInterview from './singleInterview';
function dashboard() {
  return (
    <div className="dashboard">
        <singleInterview/>
        <singleInterview/>
        <singleInterview/>
    </div>
  );
}

export default dashboard;
