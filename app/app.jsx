var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/dashboard');
  }else{
    store.dispatch(actions.logout());
    hashHistory.push('/');
  };
});

// Load foundation
$(document).foundation();

// load custom styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
    {router}
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
