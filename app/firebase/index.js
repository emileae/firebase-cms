import firebase from 'firebase';

try {
  var config = {
     apiKey: "AIzaSyAFrH0m3WHF2Pym5i2Exk6pTr8dQMabhAg",
     authDomain: "emile-todo-app.firebaseapp.com",
     databaseURL: "https://emile-todo-app.firebaseio.com",
     storageBucket: "emile-todo-app.appspot.com",
   };
   firebase.initializeApp(config);
} catch (e) {

};

export var firebaseRef = firebase.database().ref();
export default firebase;
