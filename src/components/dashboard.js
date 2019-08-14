import React from 'react';
import './dashboard.css';
import SingleInterview from './SingleInterview';
function dashboard() {
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

export default dashboard;
