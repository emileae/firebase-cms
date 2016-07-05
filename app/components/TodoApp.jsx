var React = require('react');
var TodoList = require('TodoList');
var TodoForm = require('TodoForm');
var TodoSearch = require("TodoSearch");
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function(){
    return (
      {
        showCompleted: false,
        searchText: '',
        todos : [
          {
            id: uuid(),
            text: "walk the dog",
            completed: false
          },
          {
            id: uuid(),
            text: "clean the yard",
            completed: true
          },
          {
            id: uuid(),
            text: "learn react",
            completed: false
          },
          {
            id: uuid(),
            text: "practice unit tests",
            completed: false
          }
        ]
      }
    );
  },
  handleAddTodo: function(text){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  },
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id){
        todo.completed = !todo.completed;
      };

      return todo;
    });

    this.setState({
      todos: updatedTodos
    })
  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function(){
    var {todos} = this.state;
    //console.log("todos: ", todos);
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <TodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
