import React from 'react';
import './App.css';
// import {Redirect} from 'react-router';
import {connect} from 'react-redux';

import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
import SingleInterview from './components/SingleInterview';
import dashboard from './components/dashboard';
import {Route, BrowserRouter as Router} from 'react-router-dom';


class App extends React.Component {

render(){
 return (
    //UNCOMMENT THIS LATER
    // <Redirect to="/signup"/>
    
console.log(this.props.users),
<Router>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {/* the singleInterview link is temporary so we can see how the components looks like */}
        <Route path="/SingleInterview" component={SingleInterview} />
        <Route path="/dashboard" component={dashboard} />
        <Route path="/user" component={User} />
      </div>
    </Router> 
    );
}
}
const getStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(getStateToProps)(App)
