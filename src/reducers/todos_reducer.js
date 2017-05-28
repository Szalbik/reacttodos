import { ADD_TODO, TOOGLE_TODO } from '../actions/index';

const todos = (state = [], action) => {
  console.log('Reducer text: ',action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.id, text: action.text, completed: false }];
    case TOOGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return Object.assign({}, todo, {completed: !todo.completed});
      })
    default:
      return state
  }
}

export default todos;
