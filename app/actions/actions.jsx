import moment from 'moment';

import firebase, {firebaseRef, facebookProvider} from 'app/firebase/';// if file is called index can leave off filename

// MATERIAL UI
export var setDrawer = (open) => {
  return {
    type: "UI_DRAWER",
    open
  }
};


// set an array-like property
export var startAddPost = (postData) => {
  return (dispatch, getState) => {
    var post = {
      ...postData,
      createdAt: moment().unix(),
      publish: false
    };

    // can use auth ID to create a user space
    //var uid = getState().auth.uid;

    // create post in DB, ASYNC
    var postRef = firebaseRef.child(`posts`).push(post);

    // update the state
    return postRef.then(() => {
      dispatch(addPost({
        ...post,
        id: postRef.key
      }));
    });
  };
};

export var addPost = (post) => {
  return {
    type: "ADD_POST",
    post
  }
};

export var addPosts = (posts) => {
  return {
    type: 'ADD_POSTS',
    posts
  };
};

export var startAddPosts = () => {
  return (dispatch, getState) => {
    //var uid = getState().auth.uid;
    var postsRef = firebaseRef.child(`posts`);
    return postsRef.once('value').then((snapshot) => {
      var posts = snapshot.val() || {};
      var parsedPosts = [];

      Object.keys(posts).forEach((postId) => {
        parsedPosts.push({
          id: postId,
          ...posts[postId]
        });
      });

      dispatch(addPosts(parsedPosts));

    });
  };
};














// old actions
export var setSearchText = (searchText) => {
  return {
    type: "SET_SEARCH_TEXT",
    searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: "TOGGLE_SHOW_COMPLETED",
  }
};

export var addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    todo
  }
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var startAddTodos = () => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var todosRef = firebaseRef.child(`users/${uid}/todos`);
    return todosRef.once('value').then((snapshot) => {
      var todos = snapshot.val() || {};
      var parsedTodos = [];

      Object.keys(todos).forEach((todoId) => {
        parsedTodos.push({
          id: todoId,
          ...todos[todoId]
        });
      });

      dispatch(addTodos(parsedTodos));

      // var todosObj = snapshot.val();
      // var keysArray = Object.keys(todosObj);
      // var todos = keysArray.map((k) => {
      //   return {
      //     ...todosObj[k],
      //     id: k
      //   }
      // });
      // console.log('todos', todos);
      // dispatch(addTodos(todos));
    });
  };
};

export var updateTodo = (id, updates) => {
  return {
    type: "UPDATE_TODO",
    id,
    updates
  }
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    //var todoRef = firebaseRef.child('todos/' + id);
    // ES6
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });

  };
};

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  }
};
export var startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(facebookProvider).then((result) => {
      console.log("Auth worked", result);
    }, (error) => {
      console.log('unable to auth', error);
    });
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  }
};
export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('logged out');
    });
  };
};
