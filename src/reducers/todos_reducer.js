import ADD_TODO from '../actions';

const todos = (state = [], action) => {
  console.log('Reducer text: ',action);
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    default:
      return state
  }
}

export default todos;
