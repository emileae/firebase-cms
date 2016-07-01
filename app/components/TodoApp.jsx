var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function(){
    return (
      {
        todos : [
          {
            id: 1,
            text: "walk the dog"
          },
          {
            id: 2,
            text: "clean the yard"
          },
          {
            id: 3,
            text: "learn react"
          },
          {
            id: 4,
            text: "practice unit tests"
          }
        ]
      }
    );
  },
  render: function(){
    var {todos} = this.state;
    console.log("todos: ", todos);
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
