export const ADD_TODO = 'add_todo';
export const TOOGLE_TODO = 'toggle_todo';

let nextTodoId = 0;

export function addTodo(text) {
    return {
      type: ADD_TODO,
      id: nextTodoId++,
      text,
      completed: false
    }
}

export const toogleTodo = (id) => {
  return {
    type: TOOGLE_TODO,
    id
  }
}
