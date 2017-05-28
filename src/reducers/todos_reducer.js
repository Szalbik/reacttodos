import ADD_TODO from '../actions';

const todo = (state, action) => {
  console.log('Reducer text: ',action.text);
  switch (action.type) {
    case ADD_TODO:

      return {
        id: action.id,
        text: action.text
      };
    default:
      return state;
  }
}

const todos = (state = [], action) => {
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
