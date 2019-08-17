import React, {Component} from 'react';
import './App.css';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
import SingleInterview from './components/SingleInterview';
import Dashboard from './components/Dashboard';
import {Route, BrowserRouter as Router} from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    console.log(this.props);
  }

  render(){
    return (
      <Router>
        <div>
        <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {/* the singleInterview link is temporary so we can see how the components looks like */}
          <Route path="/SingleInterview" component={SingleInterview} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/user" component={User} />
        </div>
      </Router> 
    );
  }
}

export default App;
