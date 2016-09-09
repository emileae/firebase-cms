var uuid = require('node-uuid');
var moment = require('moment');


// UI
export var uiReducer = (state = {open:false}, action) => {
  switch(action.type){
    case 'UI_DRAWER':
      return {
        ...state,
        open: action.open
      };
    default:
      return state
  }
};


// add array-like property to state
export var postReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_POST':
      return [
        ...state,
        action.post
      ];
    case 'UPDATE_POST':
      return state.map((todo) => {
          if (todo.id === action.id){
            return {
              ...todo,
              ...action.updates
            }
          } else{
            return todo;
          }
        });
    case 'ADD_POSTS':
      return [
        ...state,
        ...action.posts
      ];
    case 'LOGOUT':
      return []
    default:
      return state;
  };
};












export var searchTextReducer = (state = '', action) => {
  switch(action.type){
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state
  }
};

export var showCompletedReducer = (state = false, action) => {
  switch(action.type){
    case "TOGGLE_SHOW_COMPLETED":
      return !state;
    default:
      return state;
  }
};

export var todosReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
    case 'UPDATE_TODO':
      return state.map((todo) => {
          if (todo.id === action.id){
            return {
              ...todo,
              ...action.updates
            }
          } else{
            return todo;
          }
        });
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    case 'LOGOUT':
      return []
    default:
      return state;
  };
};

export var authReducer = (state = {}, action) => {
  switch(action.type){
    case 'LOGIN':
      return {
        uid: action.uid
      }
    case 'LOGOUT':
      return {}
    default:
      return state
  }
};
