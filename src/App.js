import React, {Component} from 'react';
import './App.css';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
import SingleInterview from './components/SingleInterview';
import Dashboard from './components/Dashboard';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {fetchInterviewsThunk} from "./store/actions";


class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    this.props.fetchAllInterviews();
  }

render(){
  const Interviews = () => (<Dashboard interviews = {this.props.interviews}/>);
 return (
    <Router>
      <div>
      {/* <Redirect to="/signup" component={Signup}/> */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {/* the singleInterview link is temporary so we can see how the components looks like */}
        <Route path="/SingleInterview" component={SingleInterview} />
        <Route path="/dashboard" render={Interviews} />
        <Route path="/user" component={User} />
      </div>
    </Router> 
    );
}
}
const getStateToProps = (state) => {
  return {
    users: state.users,
    user: state.user,
    interviews: state.interviews
  }
}

const mapState = (state) => {
  return {
    users: state.users,
    user: state.user,
    interviews: state.interviews
  }
}

const mapDispatch = (dispatch) => { return {
fetchAllInterviews: () => dispatch(fetchInterviewsThunk())
}
}

export default connect(mapState, mapDispatch, getStateToProps)(App)
