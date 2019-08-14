import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';
import SingleInterview from './components/SingleInterview';
import dashboard from './components/dashboard';
import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './store/reducers/index.js';

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      {/* the singleInterview link is temporary so we can see how the components looks like */}
      <Route path="/SingleInterview" component={SingleInterview} />
      <Route path="/dashboard" component={dashboard} />
    </div>
  </Router>
)

// See the routing object
ReactDOM.render(<Provider store={createStore(reducers)}>{routing}</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
