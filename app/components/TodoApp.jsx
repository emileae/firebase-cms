var React = require('react');
var TodoList = require('TodoList');
var TodoForm = require('TodoForm');

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
  handleAddTodo: function(text){
    alert("new todo: " + text);
  },
  render: function(){
    var {todos} = this.state;
    console.log("todos: ", todos);
    return (
      <div>
        <TodoList todos={todos}/>
        <TodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
