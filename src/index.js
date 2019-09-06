import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './store/reducers/index.js';
import thunk from 'redux-thunk';


var http = require("http");

setInterval(function() {
    http.get("http://<your app name>.herokuapp.com");
}, 600000);

// See the routing object
ReactDOM.render(<Provider store={createStore(reducers, applyMiddleware(thunk))}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



