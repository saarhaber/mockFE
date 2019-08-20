import React, {Component} from 'react';
import './App.css';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
import EditAccount from './components/EditAccount';
import SingleInterview from './components/SingleInterview';
import NewInterview from './components/NewInterview';
import EditInterview from './components/EditInterview';
import Dashboard from './components/Dashboard';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux'


class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render(){
    let component = this
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/NewInterview" component={NewInterview} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/user" component={User} />
          <Route path="/editAccount" component={EditAccount} />
          {this.props.interviews.map(interview => {
              return (
                <Route exact path={"/interviews/" + interview.id + "/editInterview"} 
                render={() => {
                  return (
                  <EditInterview
                  interview_={interview}
                  />
                  )
                }}
                />
              )
            })}
        </div>
      </Router> 
    );
  }
}

const getStateToProps = state => {
  return {
    user: state.user,
    users: state.users,
    interview: state.interview,
    interviews: state.interviews
  }
}

export default connect(getStateToProps)(App)