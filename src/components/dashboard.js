import React from 'react';
import './dashboard.css';
import SingleInterview from './SingleInterview';
function dashboard() {
  return (
    <div className="dashboard">
        <SingleInterview/>
        <SingleInterview/>
        <SingleInterview/>
        <SingleInterview/>
        <SingleInterview/>
        <SingleInterview/>
        <SingleInterview/>
    </div>
  );
}

export default dashboard;
