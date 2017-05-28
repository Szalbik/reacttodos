import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { toogleTodo } from '../actions/index';

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.onTodoClick = this.onTodoClick.bind(this);
  }

  onTodoClick(id) {
    this.props.toogleTodo(id);
  }

  render() {
    if( this.props.todos.length === 0 ) {
      return <div>Add Todos</div>;
    }

    return(
      <ul>
        {this.props.todos.map((todo) => {
           return (
             <li
               className={todo.completed ? 'toogle' : ''}
               key={todo.id}
               onClick={() => this.onTodoClick(todo.id)}
               >
                 {todo.text}
             </li>
           );
        })}
      </ul>
    );
  }
}

function mapStateToProps({ todos }) {
  return { todos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({toogleTodo}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
