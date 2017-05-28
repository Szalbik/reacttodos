import React, { Component } from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class AddTodoForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: ''
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFormSubmit(e){
    e.preventDefault();

    this.props.addTodo(this.state.term);
    this.setState({term: ''})
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type='text' value={this.state.term} onChange={this.onInputChange} />
        <button type='submit'>Add Todo</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addTodo}, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTodoForm);
