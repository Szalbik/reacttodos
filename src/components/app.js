import React, { Component } from 'react';
import AddTodoForm from './add_todo_form';
import TodoList from './todo_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <AddTodoForm />
        <TodoList />
      </div>
    );
  }
}
