//var redux = require('redux');
import * as redux from 'redux';

import {searchTextReducer, showCompletedReducer, postReducer, authReducer, uiReducer} from 'reducers';

import thunk from 'redux-thunk';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    posts: postReducer,
    auth: authReducer,
    ui: uiReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;

};
