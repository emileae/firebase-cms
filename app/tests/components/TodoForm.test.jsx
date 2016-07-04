var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoForm = require('TodoForm');

describe('TodoForm', () => {
  it("should exist", () => {
    expect(TodoForm).toExist();
  });

  it("should call onAddTodo if valid todo text is entered", () =>{
    var todoText = "some test todo";
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todo.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it("should not call onAddTodo if no text is entered", () =>{
    var todoText = "";
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todo.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
