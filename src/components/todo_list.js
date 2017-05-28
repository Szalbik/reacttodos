import React, { Component } from 'react';
import {connect} from 'react-redux';

class TodoList extends Component {
  render() {
    if( this.props.todos.length === 0 ) {
      return <div>Add Todos</div>;
    }

    console.log(this.props.todos)

    return(
      <ul>
        {this.props.todos.map(todo => {
          <li key={todo.id}>{todo.text}</li>
        })}
      </ul>
    );
  }
}

function mapStateToProps({ todos }) {
  return { todos };
}

export default connect(mapStateToProps)(TodoList);
