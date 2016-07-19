var React = require('react');

var TodoForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var todo = this.refs.todo.value;

    if ( todo.length > 0 ){
      this.refs.todo.value = '';
      this.props.onAddTodo(todo);
    }else{
      this.refs.todo.focus();
    };

  },
  render: function(){
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input ref="todo" type="text" placeholder="What do you want to do?"></input>
          <button type="submit" className="button expanded">Add</button>
        </form>
      </div>
    )
  }
});

module.exports = TodoForm;
