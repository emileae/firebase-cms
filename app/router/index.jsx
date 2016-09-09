import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Dashboard from 'Dashboard';
import Post from 'Post';
import Login from 'Login';
import firebase from 'app/firebase/';

var requireLogin = (nextState, replace, next) => {
  if(!firebase.auth().currentUser){
    replace('/');
  };
  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  if(firebase.auth().currentUser){
    replace('/dashboard');
  };
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}></IndexRoute>
      <Route path="/dashboard" component={Dashboard} onEnter={requireLogin}></Route>
      <Route path="/dashboard/post" component={Post} onEnter={requireLogin}></Route>
    </Route>
  </Router>
)
